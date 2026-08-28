import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faMicrophone, faStar, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { searchVentures } from "../services/ventureApi";
const CHIPS = [
  "Open plots under \u20B940L near Future City",
  "Villas near Financial District",
  "HMDA layouts near ORR Exit 13",
  "Compare Aparna vs My Home",
  "Best Investment in Shadnagar"
];
function Hero({
  searchValue,
  onSearchChange,
  onSearchSubmit,
  suggestions,
  isSuggestionsLoading,
  suggestionsError
}) {
  const isControlled = typeof searchValue === "string";
  const [localSearchValue, setLocalSearchValue] = useState("");
  const [localSuggestions, setLocalSuggestions] = useState([]);
  const [localSuggestionsLoading, setLocalSuggestionsLoading] = useState(false);
  const [localSuggestionsError, setLocalSuggestionsError] = useState("");
  const [searchResultSummary, setSearchResultSummary] = useState("");

  const effectiveSearchValue = isControlled ? searchValue : localSearchValue;
  const effectiveSuggestions = Array.isArray(suggestions) ? suggestions : localSuggestions;
  const effectiveSuggestionsLoading = typeof isSuggestionsLoading === "boolean" ? isSuggestionsLoading : localSuggestionsLoading;
  const effectiveSuggestionsError = typeof suggestionsError === "string" ? suggestionsError : localSuggestionsError;

  const chipsRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const syncArrowState = () => {
    const chipsElement = chipsRef.current;

    if (!chipsElement) {
      return;
    }

    const maxScrollLeft = chipsElement.scrollWidth - chipsElement.clientWidth;

    setShowLeftArrow(chipsElement.scrollLeft > 0);
    setShowRightArrow(maxScrollLeft > 0 && chipsElement.scrollLeft < maxScrollLeft - 1);
  };

  useEffect(() => {
    syncArrowState();

    window.addEventListener("resize", syncArrowState);

    return () => {
      window.removeEventListener("resize", syncArrowState);
    };
  }, []);

  const handleChipsScroll = (direction) => {
    const chipsElement = chipsRef.current;

    if (!chipsElement) {
      return;
    }

    const scrollAmount = Math.max(chipsElement.clientWidth * 0.8, 220);

    chipsElement.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  const updateSearchValue = (value) => {
    if (typeof onSearchChange === "function") {
      onSearchChange(value);
      return;
    }

    setLocalSearchValue(value);
  };

  const handleSearch = async (value) => {
    const normalized = value.trim();

    if (!normalized) {
      setSearchResultSummary("");
      return;
    }

    if (typeof onSearchSubmit === "function") {
      onSearchSubmit(value);
      return;
    }

    setSearchResultSummary("Loading projects...");

    try {
      const result = await searchVentures({
        query: normalized,
        pageNumber: 1,
        pageSize: 10
      });

      setSearchResultSummary(`Found ${result.totalCount} matching projects.`);
    } catch (error) {
      setSearchResultSummary(error?.message || "Unable to search projects right now.");
    }
  };

  useEffect(() => {
    if (typeof onSearchChange === "function") {
      return;
    }

    const typedValue = effectiveSearchValue.trim();

    if (!typedValue) {
      setLocalSuggestions([]);
      setLocalSuggestionsError("");
      setLocalSuggestionsLoading(false);
      return;
    }

    let isActive = true;
    const debounceTimer = setTimeout(async () => {
      setLocalSuggestionsLoading(true);
      setLocalSuggestionsError("");

      try {
        const result = await searchVentures({
          query: typedValue,
          pageNumber: 1,
          pageSize: 5
        });

        if (!isActive) {
          return;
        }

        const nextSuggestions = result.items.map((item) => item?.ProjectName || "").filter(Boolean);
        setLocalSuggestions(Array.from(new Set(nextSuggestions)).slice(0, 5));
      } catch (error) {
        if (!isActive) {
          return;
        }

        setLocalSuggestions([]);
        setLocalSuggestionsError(error?.message || "Unable to load suggestions.");
      } finally {
        if (isActive) {
          setLocalSuggestionsLoading(false);
        }
      }
    }, 500);

    return () => {
      isActive = false;
      clearTimeout(debounceTimer);
    };
  }, [effectiveSearchValue, onSearchChange]);

  return <section className="vd-hero">
      <div className="vd-hero-inner">
        <h1 className="vd-hero-h1">
          Find the Right Real Estate Venture Using{" "}
          <span className="ai-word">
            AI
            <sup style={{ fontSize: "0.45em", verticalAlign: "super" }}>✦</sup>
          </span>
        </h1>
        <p className="vd-hero-sub">
          Search 10,000+ RERA Projects, Plots, Villas &amp; Apartments Across India
        </p>

        <div className="vd-searchbar">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="vd-searchbar-icon" />
          <input
    className="vd-searchbar-input"
    type="text"
    placeholder="What are you looking for?"
    value={effectiveSearchValue}
    onChange={(event) => updateSearchValue(event.target.value)}
    onKeyDown={(event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSearch(effectiveSearchValue);
      }
    }}
    list="venture-search-suggestions"
  />
          <span className="vd-search-divider" aria-hidden="true" />
          <button className="vd-mic-btn" title="Voice search">
            <FontAwesomeIcon icon={faMicrophone} />
          </button>
          <button className="vd-askai-btn" onClick={() => handleSearch(effectiveSearchValue)}>
            <FontAwesomeIcon icon={faStar} />
            Ask AI
          </button>
        </div>

        <datalist id="venture-search-suggestions">
          {effectiveSuggestions.map((suggestion) => <option key={suggestion} value={suggestion} />)}
        </datalist>
        <p style={{ margin: "0 0px", fontSize: 12, color: "#475467", minHeight: 18 }}>
          {effectiveSuggestionsLoading ? "Loading suggestions..." : effectiveSuggestionsError || searchResultSummary || "\u00a0"}
        </p>

        <div className="vd-chips-wrap">
          <button className="vd-chip-arrow" aria-label="Scroll chip suggestions left" onClick={() => handleChipsScroll("left")} style={{
          visibility: showLeftArrow ? "visible" : "hidden",
          pointerEvents: showLeftArrow ? "auto" : "none"
        }}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="vd-chips" ref={chipsRef} onScroll={syncArrowState}>
            {CHIPS.map((chip) => <button key={chip} className="vd-chip" onClick={() => handleSearch(chip)}>
              {chip}
            </button>)}
          </div>
          <button className="vd-chip-arrow" aria-label="Scroll chip suggestions right" onClick={() => handleChipsScroll("right")} style={{
          visibility: showRightArrow ? "visible" : "hidden",
          pointerEvents: showRightArrow ? "auto" : "none"
        }}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>;
}
export {
  Hero as default
};
