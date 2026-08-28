import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faChevronRight } from "@fortawesome/free-solid-svg-icons";
function AIInsightBanner() {
  return <div className="vd-banner">
      <div className="vd-banner-icon">
        <FontAwesomeIcon icon={faBolt} />
      </div>
      <p className="vd-banner-text mb-0">
        <strong>AI Insight:</strong>&nbsp; Top areas near ORR and Future City are seeing{" "}
        <strong>15–20% growth</strong> in property value due to infrastructure development.
      </p>
      <button className="vd-banner-btn">
        View Full Insights
        <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 10 }} />
      </button>
    </div>;
}
export {
  AIInsightBanner as default
};
