import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faBalanceScale,
  faChartLine,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
const CARDS = [
  {
    id: "advisor",
    avatarClass: "blue",
    icon: faRobot,
    title: "AI Advisor",
    desc: "Not sure what to buy? Ask AI and get best recommendations.",
    cta: "Start AI Chat",
    ctaClass: "blue",
    ctaIcon: faChevronRight
  },
  {
    id: "compare",
    avatarClass: "purple",
    icon: faBalanceScale,
    title: "AI Compare",
    desc: "Compare projects, builders & locations using AI.",
    cta: "Compare Now",
    ctaClass: "purple",
    ctaIcon: null
  },
  {
    id: "insights",
    avatarClass: "green",
    icon: faChartLine,
    title: "Investment Insights",
    desc: "Explore high ROI areas & growth corridors.",
    cta: "Explore Insights",
    ctaClass: "green",
    ctaIcon: null
  }
];
function AIAdvisorSection() {
  return <div className="row g-3">
      {CARDS.map((c) => <div key={c.id} className="col-12 col-md-4">
          <div className="vd-advisor-card">
            <div className={`vd-advisor-avatar ${c.avatarClass}`}>
              <FontAwesomeIcon icon={c.icon} />
            </div>
            <div>
              <div className="vd-advisor-title">{c.title}</div>
              <div className="vd-advisor-desc">{c.desc}</div>
              <button className={`vd-advisor-cta ${c.ctaClass}`}>
                {c.cta}
                {c.ctaIcon && <FontAwesomeIcon icon={c.ctaIcon} style={{ fontSize: 10 }} />}
              </button>
            </div>
          </div>
        </div>)}
    </div>;
}
export {
  AIAdvisorSection as default
};
