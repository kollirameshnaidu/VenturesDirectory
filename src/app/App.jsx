import { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ventures.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import PropertySection from "./components/PropertySection";
import AIAdvisorSection from "./components/AIAdvisorSection";
import PopularComparisons from "./components/PopularComparisons";
import Footer from "./components/Footer";
import { searchVentures } from "./services/ventureApi";

const PAGE_SIZE = 10;

function App() {
  const [selectedBuilder, setSelectedBuilder] = useState("All Builders");
  const [selectedReraNo, setSelectedReraNo] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [projects, setProjects] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isProjectsLoading, setIsProjectsLoading] = useState(false);
  const [projectsError, setProjectsError] = useState("");
  const [isSuggestionsLoading, setIsSuggestionsLoading] = useState(false);
  const [suggestionsError, setSuggestionsError] = useState("");

  const loadProjects = useCallback(async (query, page) => {
    setIsProjectsLoading(true);
    setProjectsError("");

    try {
      const result = await searchVentures({
        query,
        pageNumber: page,
        pageSize: PAGE_SIZE
      });

      setProjects(result.items);
      setTotalCount(result.totalCount);
    } catch (error) {
      setProjects([]);
      setTotalCount(0);
      setProjectsError(error?.message || "Unable to load projects right now.");
    } finally {
      setIsProjectsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProjects(searchQuery, pageNumber);
  }, [loadProjects, pageNumber, searchQuery]);

  useEffect(() => {
    const typedValue = searchInput.trim();

    if (!typedValue) {
      setIsSuggestionsLoading(false);
      setSuggestions([]);
      setSuggestionsError("");
      return;
    }

    let isActive = true;
    const debounceTimer = setTimeout(async () => {
      setIsSuggestionsLoading(true);
      setSuggestionsError("");

      try {
        const result = await searchVentures({
          query: typedValue,
          pageNumber: 1,
          pageSize: 5
        });

        if (!isActive) {
          return;
        }

        const nextSuggestions = result.items.map((item) => item?.ProjectName || item?.projectName || "").filter(Boolean);
        setSuggestions(Array.from(new Set(nextSuggestions)).slice(0, 5));
      } catch (error) {
        if (!isActive) {
          return;
        }

        setSuggestions([]);
        setSuggestionsError(error?.message || "Unable to load suggestions.");
      } finally {
        if (isActive) {
          setIsSuggestionsLoading(false);
        }
      }
    }, 500);

    return () => {
      isActive = false;
      clearTimeout(debounceTimer);
    };
  }, [searchInput]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      const nextQuery = searchInput.trim();
      const normalizedRera = nextQuery.replace(/\s+/g, "");
      const isReraSearch = /^P\d{5,}$/i.test(normalizedRera);

      setSearchQuery(nextQuery);
      setSelectedReraNo(isReraSearch ? normalizedRera : "");
      setPageNumber(1);
    }, 400);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchInput]);

  const handleSearchSubmit = (value) => {
    const nextQuery = value.trim();
    const normalizedRera = nextQuery.replace(/\s+/g, "");
    const isReraSearch = /^P\d{5,}$/i.test(normalizedRera);

    setSearchInput(value);
    setSearchQuery(nextQuery);
    setSelectedReraNo(isReraSearch ? normalizedRera : "");
    setPageNumber(1);
  };

  return <div style={{ minHeight: "100vh", background: "#f1f5f9" }}>
      {
    /* Sticky Navbar */
  }
      <Navbar />

      {
    /* Hero — full bleed city bg */
  }
      <Hero
    searchValue={searchInput}
    onSearchChange={setSearchInput}
    onSearchSubmit={handleSearchSubmit}
    suggestions={suggestions}
    isSuggestionsLoading={isSuggestionsLoading}
    suggestionsError={suggestionsError}
  />

      {
    /* Filter bar overlaps hero bottom */
  }
      <FilterBar selectedBuilder={selectedBuilder} onBuilderChange={setSelectedBuilder} />

      {
    /* AI Insight strip */
  }
    

      {
    /* Property Cards + Map */
  }
      <PropertySection builderName={selectedBuilder} reraNo={selectedReraNo} searchQuery={searchQuery} />

      {
    /* AI Advisor Cards + Popular Comparisons */
  }
      <section className="vd-advisor-section">
        <div className="row g-3">
          <div className="col-12 col-lg-8">
            <AIAdvisorSection />
          </div>
          <div className="col-12 col-lg-4">
            <PopularComparisons />
          </div>
        </div>
      </section>

      {
    /* Footer / Bank Strip */
  }
      <Footer />
    </div>;
}
export {
  App as default
};
