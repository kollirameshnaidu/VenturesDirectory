import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const PAIRS = [
  { a: "Aparna", b: "My Home" },
  { a: "Prestige", b: "Sobha" },
  { a: "Lodha", b: "Brigade" }
];
function PopularComparisons() {
  return <div className="vd-comparisons-wrap">
      <div className="vd-comp-header">
        <span className="vd-comp-title">Popular Comparisons</span>
        <a href="#" className="vd-view-all">
          View All
          <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 10 }} />
        </a>
      </div>

      {PAIRS.map((p, i) => <div key={i} className="vd-comp-row">
          <span className="vd-comp-name">{p.a}</span>
          <span className="vd-vs-pill">VS</span>
          <span className="vd-comp-name right">{p.b}</span>
        </div>)}
    </div>;
}
export {
  PopularComparisons as default
};
