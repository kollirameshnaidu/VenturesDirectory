import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faStar } from "@fortawesome/free-solid-svg-icons";
const BANKS = ["SBI", "HDFC", "ICICI Bank", "Axis Bank", "Piramal"];
function Footer() {
  return <footer className="vd-footer">
      <div className="vd-footer-strip">
        <div className="vd-footer-trust">
          <span>Trusted By Thousands of Users</span>
          <span className="vd-stars">
            {[...Array(4)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
          </span>
          <span className="vd-rating">4.8/5</span>
        </div>

        <div className="vd-footer-banks">
          <div className="vd-loan-badge">
            <FontAwesomeIcon icon={faCircleCheck} />
            Bank Loan Available
          </div>
          {BANKS.map((b) => <div key={b} className="vd-bank-pill">{b}</div>)}
        </div>
      </div>
      <p className="vd-copyright">
        © 2026 VenturesDirectory. All rights reserved.
      </p>
    </footer>;
}
export {
  Footer as default
};
