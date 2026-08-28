import axios from "axios";

const DEFAULT_PROD_API_BASE_URL = "https://uatapi.buyrentsale.com/api";

const resolveApiBaseUrl = () => {
  const envBaseUrl = import.meta.env.VITE_API_BASE_URL;

  if (envBaseUrl) {
    return envBaseUrl;
  }

  if (import.meta.env.DEV) {
    return "/api";
  }

  return DEFAULT_PROD_API_BASE_URL;
};

const API_BASE_URL = resolveApiBaseUrl();

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000
});

const isLikelyReraNo = (value) => /^P\d{5,}$/i.test(value.replace(/\s+/g, ""));
const isLikelyLpNumber = (value) => /\d+\/\d{4}\/\w+/i.test(value);

const parsePrefixedSearch = (value) => {
  const match = value.match(/^(ventureName|builderName|reraNo|lpNumber|searchText)\s*[:=]\s*(.+)$/i);

  if (!match) {
    return null;
  }

  return {
    key: match[1],
    query: match[2].trim()
  };
};

const getSearchParams = ({ query, pageNumber, pageSize }) => {
  const params = {
    pageNumber,
    pageSize
  };

  if (!query) {
    return params;
  }

  const normalizedQuery = query.trim();
  const prefixedSearch = parsePrefixedSearch(normalizedQuery);

  if (prefixedSearch?.query) {
    params[prefixedSearch.key] = prefixedSearch.query;
    return params;
  }

  if (isLikelyReraNo(normalizedQuery)) {
    params.reraNo = normalizedQuery;
    return params;
  }

  if (isLikelyLpNumber(normalizedQuery)) {
    params.lpNumber = normalizedQuery;
    return params;
  }

  params.searchText = normalizedQuery;
  return params;
};

const getSafeErrorMessage = (errorMessage) => {
  if (typeof errorMessage !== "string") {
    return "Unable to fetch ventures right now.";
  }
  return errorMessage;
};

const getPayloadErrorMessage = (payload) => payload?.errorMessage || payload?.ErrorMessage || payload?.message || payload?.Message || payload?.ResponseData?.errorMessage || payload?.ResponseData?.ErrorMessage || "";

const hasErrorFlag = (payload) => {
  const statusCode = Number(payload?.statusCode ?? payload?.StatusCode);
  return payload?.isError === true || payload?.IsError === true || Number.isFinite(statusCode) && statusCode >= 400;
};

const looksLikeBackendErrorMessage = (message) => /does not belong to table|invalid column|sql|exception|server error|internal error/i.test(message);

const normalizeResponse = (payload) => {
  const body = payload?.body || payload?.Body || payload?.responseData || payload?.ResponseData || payload;
  const payloadErrorMessage = getPayloadErrorMessage(payload) || getPayloadErrorMessage(body);
  const shouldThrow = hasErrorFlag(payload) || hasErrorFlag(body) || payloadErrorMessage && looksLikeBackendErrorMessage(payloadErrorMessage);

  if (shouldThrow) {
    throw new Error(getSafeErrorMessage(payloadErrorMessage));
  }

  const list = body?.items || body?.Items || body?.Data || body?.data || payload?.items || payload?.Items || payload?.results || payload?.Results || payload?.ResponseData?.Data || payload;

  const items = Array.isArray(list) ? list : [];
  const totalCountRaw = body?.totalCount || body?.TotalCount || body?.totalRecords || body?.TotalRecords || payload?.totalCount || payload?.TotalCount || payload?.totalRecords || payload?.TotalRecords;
  const totalCount = Number.isFinite(Number(totalCountRaw)) ? Number(totalCountRaw) : items.length;

  return { items, totalCount };
};

export const searchVentures = async ({ query = "", pageNumber = 1, pageSize = 10 }) => {
  const params = getSearchParams({ query, pageNumber, pageSize });
  const response = await apiClient.post("/venture-project/search-ventures/", { params });

  return normalizeResponse(response.data);
};
