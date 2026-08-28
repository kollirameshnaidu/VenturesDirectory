import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBell,
  faHeart,
  faBars,
  faTimes,
  faGlobe,
  faRobot
} from "@fortawesome/free-solid-svg-icons";
const NAV_LINKS = [
  { label: "Buy", dropdown: false, href: "https://buyrentsale.com/w/buy" },
  { label: "Rent", dropdown: false, href: "https://buyrentsale.com/w/rent" },
  { label: "Invest", dropdown: false, href: "https://hyderabadlandinvestments.com/" },
  { label: "Builders", dropdown: false },
  { label: "Projects", dropdown: false, href: "https://buyrentsale.com/w/viewprojects" },
  { label: "Insights", dropdown: false, badge: "New" }
];
function Navbar() {
  const [open, setOpen] = useState(false);
  return <>
      <nav className="vd-navbar">
        {
    /* Logo */
  }
        <a href="#" className="vd-logo-wrap" style={{ textDecoration: "none" }}>
          <div className="vd-logo-text">
            Ventures<span className="blue">Directory</span>
            <span className="vd-logo-ai-badge">AI</span>
          </div>
          <div className="vd-logo-sub">AI Real Estate Discovery</div>
        </a>

        {
    /* Desktop Nav Links */
  }
        <div className="vd-nav-links">
          {NAV_LINKS.map((l) => <a key={l.label} href={l.href || "#"} target={l.target || "_blank"} className="vd-navlink">
              {l.label}
              {l.dropdown && <FontAwesomeIcon icon={faChevronDown} className="fa-chevron-down" />}
              {l.badge && <span className="vd-badge-new">{l.badge}</span>}
            </a>)}
        </div>

        {
    /* Right Actions */
  }
        <div className="vd-nav-actions">
          {
    /* Region */
  }
          <div className="vd-nav-region d-none d-md-flex">
            <FontAwesomeIcon icon={faGlobe} style={{ fontSize: 13 }} />
            <span>IN</span>
            <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: 9, opacity: 0.6 }} />
          </div>

          {
    /* Heart */
  }
          <button className="vd-icon-btn d-none d-md-flex">
            <FontAwesomeIcon icon={faHeart} />
          </button>

          {
    /* Bell */
  }
          <button className="vd-icon-btn d-none d-md-flex">
            <FontAwesomeIcon icon={faBell} />
            <span className="vd-notif-dot">1</span>
          </button>

          {
    /* Login */
  }
          <a href="#" className="vd-login-link d-none d-md-block">
            Login / Signup
          </a>

          {
    /* AI Advisor */
  }
          <a href="#" className="vd-btn-advisor">
            <FontAwesomeIcon icon={faRobot} />
            AI Advisor
          </a>

          {
    /* Hamburger */
  }
          <button
    className="vd-icon-btn d-lg-none"
    onClick={() => setOpen(!open)}
    style={{ borderRadius: 6 }}
  >
            <FontAwesomeIcon icon={open ? faTimes : faBars} />
          </button>
        </div>
      </nav>

      {
    /* Mobile Menu */
  }
      {open && <div
    style={{
      background: "#fff",
      borderBottom: "1px solid #e5e7eb",
      padding: "10px 20px 14px",
      position: "sticky",
      top: 54,
      zIndex: 1040,
      boxShadow: "0 4px 12px rgba(0,0,0,.08)"
    }}
  >
          <div className="d-flex flex-column gap-1">
            {NAV_LINKS.map((l) => <a key={l.label} href={l.href || "#"} className="vd-navlink" style={{ fontSize: 14 }}>
                {l.label}
                {l.badge && <span className="vd-badge-new ms-1">{l.badge}</span>}
              </a>)}
            <hr style={{ margin: "8px 0", borderColor: "#e5e7eb" }} />
            <a href="#" className="vd-navlink" style={{ fontSize: 14 }}>
              <FontAwesomeIcon icon={faGlobe} style={{ width: 14 }} />
              India (IN)
            </a>
            <a href="#" className="vd-navlink" style={{ fontSize: 14 }}>
              Login / Signup
            </a>
          </div>
        </div>}
    </>;
}
export {
  Navbar as default
};
