import { useCallback, useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { searchVentures } from "../services/ventureApi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "./ui/dialog";
import { Button } from "./ui/button";
import {
  faHeart,
  faLocationDot,
  faStar,
  faCircleCheck,
  faRulerCombined,
  faCalendarDays,
  faBuilding,
  faRoad,
  faShieldHalved,
  faTableCells,
  faList,
  faMap,
  faChevronDown,
  faMagnifyingGlassLocation
} from "@fortawesome/free-solid-svg-icons";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1632400990400-416d5460f337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";

const STATUS_CLASS_MAP = {
  "new launch": "new-launch",
  "ready to move": "ready",
  "under construction": "construction"
};

const PAGE_SIZE = 9;
const PRICE_PINS = [
  { top: "14%", left: "68%", label: "\u20B91.2 Cr" },
  { top: "28%", left: "50%", label: "\u20B995 L" },
  { top: "22%", left: "34%", label: "\u20B945 L" },
  { top: "50%", left: "22%", label: "\u20B955 L" },
  { top: "68%", left: "44%", label: "\u20B925 L" },
  { top: "38%", left: "72%", label: "\u20B923 L" },
  { top: "58%", left: "62%", label: "\u20B938 L" }
];
const AREA_LABELS = [
  { top: "8%", left: "55%", text: "Financial District" },
  { top: "18%", left: "22%", text: "Gachibowli" },
  { top: "55%", left: "8%", text: "Tellapur" }
];
function PropertyCard({ p, faved, onFav, onDetails }) {
  return <div className="vd-card">
      <div className="vd-card-thumb">
        <img src={p.img} alt={p.name} />
        <span className={`vd-status-badge ${p.statusClass}`}>{p.status}</span>
        <button className={`vd-fav-btn ${faved ? "active" : ""}`} onClick={onFav} aria-label="Favourite">
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
      <div className="vd-card-body">
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 4 }}>
          <div style={{ minWidth: 0 }}>
            <div className="vd-tags" style={{ marginTop: 0, marginBottom: 0, display: "flex", flexWrap: "wrap", gap: 6 }}>
          {p.tags.map((t) => <span key={t.key} className={`vd-tag ${t.key}`} title={t.tooltip}>{t.label}</span>)}
        </div>
          </div>
          <span style={{ flexShrink: 0, borderRadius: 9999, padding: "5px 12px", fontSize: 12, lineHeight: 1, fontWeight: 800, letterSpacing: 0.45, background: "#e8f0ff", border: "1px solid #d8e4ff", color: "#1f4ed8", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            {p.projectType}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", marginTop: 5, justifyContent: "space-between", gap: 10 }}>
          <div style={{ minWidth: 0 }}>
            <div className="vd-card-name" style={{ marginBottom: 2 }}>{p.name}</div>
            <div className="vd-card-builder" style={{ fontSize: 12.5, color: "#667085" }}>{p.builder}</div>
          </div>        
        </div>

        <div className="vd-card-loc" style={{ marginTop: 2, display: "flex", alignItems: "flex-start", gap: 6, fontSize: 12.5, color: "#475467", lineHeight: 1.4 }}>
          <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: 10, color: "#98a2b3", marginTop: 3, flexShrink: 0 }} />
          <span style={{ wordBreak: "break-word" }}>{p.location}</span>
        </div>



        <div className="pjt_details" style={{ marginTop: 5, display: "grid", gap: 8, fontSize: 12.5, color: "#344054", background: "#f8fafc", border: "1px solid #e4e7ec", borderRadius: 12, padding: "10px 12px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", columnGap: 10 }}>
            <strong style={{ color: "#475467", fontWeight: 600 }}>Approved Date</strong>
            <span style={{ fontWeight: 700, color: "#0f172a" }}>{p.approvedDate}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", columnGap: 10 }}>
            <strong style={{ color: "#475467", fontWeight: 600 }}>Proposed Completion</strong>
            <span style={{ fontWeight: 700, color: "#0f172a" }}>{p.proposedCompletionDate}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", columnGap: 10 }}>
            <strong style={{ color: "#475467", fontWeight: 600 }}>Revised Completion</strong>
            <span style={{ fontWeight: 700, color: "#0f172a" }}>{p.revisedProposedCompletionDate}</span>
          </div>
        </div>

        

        <div className="vd-ai-chip" style={{ display: "none" }}>
          <FontAwesomeIcon icon={faStar} style={{ fontSize: 10, flexShrink: 0 }} />
          <span>
            <strong>AI Insight:</strong> {p.aiLabel}
            {p.aiDetail ? <>
                {" | "}
                <span style={{ fontWeight: 400 }}>{p.aiDetail}</span>
              </> : null}
          </span>
        </div>
        <div className="vd-card-actions" style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          <button className="vd-act-btn detail" type="button" onClick={onDetails} style={{ borderRadius: 10, fontWeight: 700 }}>
            View Details
          </button>
          <button className="vd-act-btn compare" style={{ borderRadius: 10, fontWeight: 700 }}>
            Compare
          </button>
          <button className="vd-act-btn explain" style={{ borderRadius: 10, fontWeight: 700 }}>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: 9 }} />
            AI Explain
          </button>
        </div>
      </div>
    </div>;
}
function MapPane() {
  return <div className="vd-map-wrap">
      <div className="vd-map-bg" />
      <div className="vd-map-grid" />

      {
    /* Overlay roads simulation */
  }
      <div style={{ position: "absolute", top: "42%", left: 0, right: 0, height: 3, background: "#fff", opacity: 0.35 }} />
      <div style={{ position: "absolute", top: 0, bottom: 0, left: "38%", width: 2.5, background: "#fff", opacity: 0.3 }} />
      <div style={{ position: "absolute", top: "25%", left: "20%", right: "10%", height: 2, background: "#f0f0f0", opacity: 0.4, transform: "rotate(-8deg)" }} />

      {
    /* Checkbox */
  }
      <label className="vd-map-checkbox-card">
        <input type="checkbox" defaultChecked style={{ accentColor: "#1a56db", width: 13, height: 13 }} />
        <FontAwesomeIcon icon={faMagnifyingGlassLocation} style={{ fontSize: 12, color: "#6b7280" }} />
        Search as I move the map
      </label>

      {
    /* Tools */
  }
      <button className="vd-map-tools-btn">Tools</button>

      {
    /* Area labels */
  }
      {AREA_LABELS.map((a) => <div key={a.text} className="vd-map-area-label" style={{ top: a.top, left: a.left }}>
          {a.text}
        </div>)}

      {
    /* Price pins */
  }
      {PRICE_PINS.map((pin, i) => <div
    key={i}
    className={`vd-map-price-pin ${i === 0 ? "active" : ""}`}
    style={{ top: pin.top, left: pin.left }}
  >
          {pin.label}
        </div>)}

      {
    /* Zoom controls */
  }
      <div className="vd-map-zoom">
        <button className="vd-map-zoom-btn">+</button>
        <button className="vd-map-zoom-btn">−</button>
      </div>

      {
    /* Mini card */
  }
      <div className="vd-map-mini">
        <img
    className="vd-map-mini-img"
    src="https://images.unsplash.com/photo-1632400990400-416d5460f337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=120"
    alt="Aparna Western Meadows"
  />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="vd-map-mini-name">Aparna Western Meadows</div>
          <div className="vd-map-mini-loc">Shadnagar, Near ORR</div>
          <div className="vd-map-mini-price">₹ 24L – ₹ 60L</div>
        </div>
        <button className="vd-map-mini-btn">View Details</button>
      </div>
    </div>;
}
const formatPriceValue = (value) => {
  if (value === null || value === undefined || value === "") {
    return "N/A";
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return `\u20B9 ${new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0
    }).format(value)}`;
  }

  const valueText = String(value).trim();
  return valueText.startsWith("\u20B9") ? valueText : `\u20B9 ${valueText}`;
};

const formatProjectDate = (value) => {
  if (!value) {
    return "N/A";
  }

  const raw = String(value).trim();

  if (!raw) {
    return "N/A";
  }

  const parsed = new Date(raw);

  if (Number.isNaN(parsed.getTime())) {
    return raw;
  }

  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
};

const normalizeApprovals = (approvals) => {
  if (Array.isArray(approvals)) {
    return approvals;
  }

  if (typeof approvals === "string") {
    return approvals.split(",").map((entry) => entry.trim()).filter(Boolean);
  }

  return [];
};

const deriveStatus = (project) => {
  const dbStatus = String(project?.ProjectStatus || "").trim();

  if (project?.IsNewLaunch) {
    return { status: dbStatus || "New Launch", statusClass: "new-launch" };
  }

  if (project?.IsReadyToMove) {
    return { status: dbStatus || "Ready to Move", statusClass: "ready" };
  }

  if (project?.IsUnderConstruction) {
    return { status: dbStatus || "Under Construction", statusClass: "construction" };
  }

  const status = dbStatus || "Project";
  const statusClass = STATUS_CLASS_MAP[String(status).toLowerCase()] || "construction";
  return { status, statusClass };
};

const getPlanApprovalNumber = (project) => {
  const rawValue = project?.PlanApprovalNumber || project?.PlanApprovalNo || project?.PlanNo || project?.ApprovalNumber || project?.LpNumber || project?.LPNumber || "";
  return String(rawValue).trim();
};

const getProjectField = (project, keys) => {
  for (const key of keys) {
    const value = project?.[key];

    if (value !== null && value !== undefined && String(value).trim() !== "") {
      return String(value).trim();
    }
  }

  return "N/A";
};

const normalizeFieldKey = (value) => String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");

const formatDatabaseValue = (value) => {
  if (value === null || value === undefined || value === "") {
    return "N/A";
  }

  if (Array.isArray(value)) {
    return value.map((entry) => formatDatabaseValue(entry)).filter((entry) => entry !== "N/A").join(", ") || "N/A";
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value).trim() || "N/A";
};

const findDatabaseField = (source, targetKeys) => {
  if (!source || typeof source !== "object") {
    return "N/A";
  }

  const normalizedTargets = targetKeys.map(normalizeFieldKey);
  const stack = [source];
  const seen = new Set();

  while (stack.length > 0) {
    const current = stack.pop();

    if (!current || typeof current !== "object" || seen.has(current)) {
      continue;
    }

    seen.add(current);

    for (const [key, value] of Object.entries(current)) {
      const normalizedKey = normalizeFieldKey(key);

      if (normalizedTargets.includes(normalizedKey) && value !== null && value !== undefined && String(value).trim() !== "") {
        return formatDatabaseValue(value);
      }

      if (value && typeof value === "object") {
        stack.push(value);
      }
    }
  }

  return "N/A";
};

const mapProjectToCard = (project, index) => {
  const { status, statusClass } = deriveStatus(project);
  const approvals = normalizeApprovals(project?.Approvals);
  const planApprovalNumber = getPlanApprovalNumber(project);
  const projectType = project?.ProjectType || project?.Type || "N/A";
  const approvedDate = formatProjectDate(project?.ApprovedDate || project?.ApprovalDate);
  const proposedCompletionDate = formatProjectDate(project?.ProposedDateOfCompletion || project?.ProposedCompletionDate);
  const revisedProposedCompletionDate = formatProjectDate(project?.RevisedProposedDateOfCompletion || project?.RevisedProposedCompletionDate);

  return {
    id: project?.ProjectId || project?.Id || `${project?.ProjectName || "project"}-${index}`,
    status,
    statusClass,
    img: project?.ImageUrl || project?.ThumbnailUrl || FALLBACK_IMAGE,
    name: project?.ProjectName || "Unnamed Project",
    builder: project?.BuilderName || "Builder details unavailable",
    location: project?.FullAddress || "Location unavailable",
    projectType,
    approvedDate,
    proposedCompletionDate,
    revisedProposedCompletionDate,
    projectData: project,
    tags: approvals.map((approval, approvalIndex) => ({
      key: `${approval.toLowerCase().replace(/\s+/g, "-")}-${approvalIndex}`,
      label: approval,
      tooltip: planApprovalNumber ? `Plan Approval Number: ${planApprovalNumber}` : "Plan Approval Number: N/A"
    })),
    aiLabel: project?.AIInsight || "No AI insight available",
    aiDetail: ""
  };
};

function PropertySection({ builderName = "All Builders", reraNo = "", searchQuery = "" }) {
  const [view, setView] = useState("Grid");
  const [favs, setFavs] = useState(/* @__PURE__ */ new Set());
  const [projects, setProjects] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const mappedProjects = useMemo(() => projects.map(mapProjectToCard), [projects]);
  const visibleProjects = useMemo(() => {
    if (mappedProjects.length <= PAGE_SIZE) {
      return mappedProjects;
    }

    const startIndex = (pageNumber - 1) * PAGE_SIZE;
    return mappedProjects.slice(startIndex, startIndex + PAGE_SIZE);
  }, [mappedProjects, pageNumber]);
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const hasPreviousPage = pageNumber > 1;
  const hasNextPage = totalCount > pageNumber * PAGE_SIZE;

  const loadProjects = useCallback(async (page, activeBuilderName, activeReraNo, activeSearchQuery) => {
    setIsLoading(true);
    setError("");

    try {
      const normalizedBuilder = activeBuilderName && activeBuilderName !== "All Builders" ? activeBuilderName : "";
      const normalizedReraNo = (activeReraNo || "").trim();
      const normalizedSearchQuery = (activeSearchQuery || "").trim();
      const query = normalizedReraNo ? `reraNo:${normalizedReraNo}` : normalizedSearchQuery || (normalizedBuilder ? `builderName:${normalizedBuilder}` : "");

      const result = await searchVentures({
        query,
        pageNumber: page,
        pageSize: PAGE_SIZE
      });

      setProjects(result.items);
      setTotalCount(result.totalCount);
    } catch (apiError) {
      setProjects([]);
      setTotalCount(0);
      setError(apiError?.message || "Unable to load projects right now.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setPageNumber(1);
  }, [builderName, reraNo, searchQuery]);

  useEffect(() => {
    loadProjects(pageNumber, builderName, reraNo, searchQuery);
  }, [builderName, loadProjects, pageNumber, reraNo, searchQuery]);

  const toggleFav = (id) => setFavs((prev) => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  const detailRows = selectedProject ? [
    { icon: faBuilding, label: "Project Type", value: selectedProject.projectType },
    { icon: faShieldHalved, label: "Project Status", value: selectedProject.status },
    { icon: faCalendarDays, label: "Approved Date", value: selectedProject.approvedDate },
    { icon: faCalendarDays, label: "Proposed Date of Completion", value: selectedProject.proposedCompletionDate },
    { icon: faCalendarDays, label: "Revised Proposed Date of Completion", value: selectedProject.revisedProposedCompletionDate },
    { icon: faRulerCombined, label: "Built-Up Area Details", value: findDatabaseField(selectedProject.projectData, ["Built-Up Area Details", "BuiltUpAreaDetails", "BuiltUpAreaDetail", "BuiltUpArea", "BuiltUpAreaSqFt", "BuiltUpAreaSqM", "BuiltUpAreaSqMeters"]) },
    { icon: faRoad, label: "Land Details", value: findDatabaseField(selectedProject.projectData, ["Land Details", "LandDetails", "LandDetail", "LandArea", "LandAreaDetails", "LandAreaSqFt", "LandAreaSqM"]) },
    { icon: faLocationDot, label: "Address For Official Communication", value: findDatabaseField(selectedProject.projectData, ["Address For Official Communication", "AddressForOfficialCommunication", "OfficialCommunicationAddress", "CommunicationAddress", "AddressForCommunication", "OfficialAddress"]) },
    { icon: faRoad, label: "Location", value: selectedProject.location },
    { icon: faRulerCombined, label: "Builder", value: selectedProject.builder },
    { icon: faCircleCheck, label: "Plan Approval Number", value: selectedProject.projectData?.PlanApprovalNumber || selectedProject.projectData?.PlanApprovalNo || selectedProject.projectData?.PlanNo || selectedProject.projectData?.ApprovalNumber || selectedProject.projectData?.LpNumber || selectedProject.projectData?.LPNumber || "N/A" }
  ] : [];


  return <section style={{ padding: "0 20px" }}>
      {
    /* Section Header */
  }
      <div className="vd-section-bar">
        <p className="vd-result-label mb-0">
          Showing <strong>{totalCount}</strong> projects matching your search
          {isLoading ? " (Loading...)" : ""}
        </p>
        <div className="vd-controls-row">
          <span className="vd-sort-label">Sort by:</span>
          <select className="vd-sort-select">
            <option>Most Relevant</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
       
        </div>
      </div>

      {
    /* Cards + Map */
  }
      <div className="row g-3">
        {
    /* Cards */
  }
        <div className="col-12 col-xl-7">
          {error ? <div style={{
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: 14,
          padding: 16,
          color: "#b42318"
        }}>
              <div>{error}</div>
              <button className="vd-more-projects-btn" style={{ marginTop: 10 }} onClick={() => loadProjects(pageNumber, builderName, reraNo, searchQuery)}>
                Retry
              </button>
            </div> : null}

          {!error && !isLoading && visibleProjects.length === 0 ? <div style={{
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: 14,
          padding: 16,
          color: "#475467"
        }}>
              No projects found for this search.
            </div> : null}

          {!error && visibleProjects.length > 0 ? <div className="row g-3">
              {visibleProjects.map((p) => <div key={p.id} className="col-12 col-sm-6 col-md-4 col-xl-4">
                  <PropertyCard
      p={p}
      faved={favs.has(p.id)}
      onFav={() => toggleFav(p.id)}
          onDetails={() => setSelectedProject(p)}
    />
                </div>)}
            </div> : null}

          {
    /* More Projects */
  }
          <div style={{ display: "flex", alignItems: "center", padding: "10px", backgroundColor: "#ececec", marginTop: "10px", borderRadius: "8px", gap: 10, flexWrap: "nowrap" }}>
            <button
    className="vd-more-projects-btn"
    style={{ width: "auto", marginTop: 0, flexShrink: 0 }}
    onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))}
    disabled={isLoading || !hasPreviousPage}
  >
              Previous
            </button>
            <span style={{ fontSize: 12.5, color: "#6b7280" }}>
              Page {pageNumber} of {totalPages} ({PAGE_SIZE} per page)
            </span>
            <button
    className="vd-more-projects-btn"
              style={{ width: "auto", marginTop: 0, flexShrink: 0 }}
    onClick={() => setPageNumber((prev) => prev + 1)}
    disabled={isLoading || !hasNextPage}
  >
              {hasNextPage ? "Next" : "No More Projects"}
              <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: 11 }} />
            </button>
          </div>
        </div>

        {
    /* Map */
  }
        <div className="col-12 col-xl-5" style={{ minHeight: 430 }}>
          <MapPane />
        </div>
      </div>

        <Dialog open={Boolean(selectedProject)} onOpenChange={(open) => {
        if (!open) {
          setSelectedProject(null);
        }
      }}>
          <DialogContent className="sm:max-w-4xl p-0 overflow-hidden border-0 bg-white" style={{ maxHeight: "86vh", width: "min(96vw, 74rem)" }}>
              {selectedProject ? <div style={{ display: "flex", flexDirection: "column", minHeight: 0, maxHeight: "85vh" }}>
                  <DialogHeader className="text-left modal_header gap-0" style={{ padding: "18px 24px 0px", borderBottom: "1px solid #e2e8f0", background: "#fff", flexShrink: 0 }}>
                    <DialogTitle style={{ fontSize: 22, color: "#0f172a" }}>Property Details</DialogTitle>
                    <DialogDescription style={{ color: "#64748b" }}>
                      Complete project information from the database record.
                    </DialogDescription>
                  </DialogHeader>

                  <div style={{ display: "grid", gridTemplateColumns: "1.02fr 0.98fr", minHeight: 0, flex: 1, overflowY: "auto", overflowX: "hidden" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ position: "relative", height: 296, maxHeight: 296, background: "#0f172a", overflow: "hidden" }}>
                        <img
                          src={selectedProject.img}
                          alt={selectedProject.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.88 }}
                        />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(14,23,42,0.1) 0%, rgba(14,23,42,0.72) 100%)" }} />
                        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 20, color: "#fff" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 999, padding: "6px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 0.3 }}>
                              <FontAwesomeIcon icon={faShieldHalved} style={{ fontSize: 11 }} />
                              {selectedProject.status}
                            </div>
                          </div>

                          <div>
                            <h2 style={{ margin: "0 0 6px", fontSize: 30, lineHeight: 1.02, fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.2 }}>{selectedProject.name}</h2>
                            <p style={{ margin: 0, fontSize: 14, maxWidth: 560, color: "rgba(255,255,255,0.92)" }}>
                              {selectedProject.builder} · {selectedProject.location}
                            </p>
                          </div>

                          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10, maxWidth: 390 }}>
                            <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 14, padding: "12px 14px", backdropFilter: "blur(6px)" }}>
                              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.8, opacity: 0.78 }}>Project Type</div>
                              <div style={{ fontSize: 14, fontWeight: 700 }}>{selectedProject.projectType}</div>
                            </div>
                            <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 14, padding: "12px 14px", backdropFilter: "blur(6px)" }}>
                              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.8, opacity: 0.78 }}>Approval</div>
                              <div style={{ fontSize: 14, fontWeight: 700 }}>Plan Approval Verified</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div style={{ display: "grid", gap: 10, padding: 12, background: "#fff" }}>
                        {detailRows
                          .filter((row) => ["Land Details", "Address For Official Communication", "Location"].includes(row.label))
                          .map((row) => <div key={row.label} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 13, borderRadius: 18, border: "1px solid #e2e8f0", background: "#f8fafc", boxShadow: "0 1px 0 rgba(15,23,42,0.02)" }}>
                              <div style={{ width: 34, height: 34, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "#dbeafe", color: "#1d4ed8", flexShrink: 0, marginTop: 1 }}>
                                <FontAwesomeIcon icon={row.icon} style={{ fontSize: 14 }} />
                              </div>
                              <div style={{ minWidth: 0 }}>
                                <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 0.6 }}>{row.label}</div>
                                <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginTop: 3, wordBreak: "break-word", lineHeight: 1.35 }}>{row.value}</div>
                              </div>
                            </div>)}
                      </div>
                    </div>

                    <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 10, background: "#fff", borderLeft: "1px solid #eef2f7" }}>
                      {detailRows
                        .filter((row) => ["Project Type", "Project Status", "Approved Date", "Proposed Date of Completion", "Revised Proposed Date of Completion", "Built-Up Area Details"].includes(row.label))
                        .map((row) => <div key={row.label} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 13, borderRadius: 18, border: "1px solid #e2e8f0", background: "#f8fafc", boxShadow: "0 1px 0 rgba(15,23,42,0.02)" }}>
                            <div style={{ width: 34, height: 34, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "#dbeafe", color: "#1d4ed8", flexShrink: 0, marginTop: 1 }}>
                              <FontAwesomeIcon icon={row.icon} style={{ fontSize: 14 }} />
                            </div>
                            <div style={{ minWidth: 0 }}>
                              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 0.6 }}>{row.label}</div>
                              <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginTop: 3, wordBreak: "break-word", lineHeight: 1.35 }}>{row.value}</div>
                            </div>
                          </div>)}

                      <div style={{ padding: 15, borderRadius: 18, border: "1px solid #e2e8f0", background: "#ffffff" }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 8 }}>Approvals</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                          {selectedProject.tags.length > 0 ? selectedProject.tags.map((tag) => <span key={tag.key} style={{ display: "inline-flex", alignItems: "center", padding: "8px 12px", borderRadius: 999, background: "#eff6ff", color: "#1d4ed8", fontSize: 12.5, fontWeight: 600 }}>
                                {tag.label}
                              </span>) : <span style={{ color: "#64748b", fontSize: 13 }}>No approval tags available</span>}
                        </div>
                      </div>

                      <div style={{ padding: 15, borderRadius: 18, border: "1px solid #e2e8f0", background: "#ffffff" }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 8 }}>AI Insight</div>
                        <div style={{ color: "#0f172a", fontSize: 14.5, lineHeight: 1.6 }}>{selectedProject.aiLabel}</div>
                      </div>

                      <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end", gap: 10, paddingTop: 6 }}>
                        <Button variant="outline" onClick={() => setSelectedProject(null)}>
                          Close
                        </Button>
                      </div>
                    </div>
                  </div>
                </div> : null}
            </DialogContent>
        </Dialog>
    </section>;
}
export {
  PropertySection as default
};
