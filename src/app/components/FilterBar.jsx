import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faIndianRupeeSign,
  faBuilding,
  faShieldHalved,
  faHardHat,
  faCalendarDays,
  faSliders
} from "@fortawesome/free-solid-svg-icons";

const PROPERTY_TYPE_OPTIONS = [
  "All Types",
  "Residential",
  {
    group: "Residential",
    options: [
      "Apartment",
      "Independent",
      "Farm House",
      "Villa",
      "Penthouse",
      "Studio House",
      "Car Parking (R)",
      "Rooftop Leasing for Solar",
      "Event Spaces (Short Time)",
      "PG Service/Co-Living"
    ]
  },
  "Commercial",
  {
    group: "Commercial",
    options: [
      "Office Space",
      "Showroom",
      "Shop",
      "IT Park (SEZ)",
      "Warehouse",
      "Co-working Spaces",
      "Car Parking (C)"
    ]
  },
  "Land",
  {
    group: "Land",
    options: [
      "Residential",
      "Commercial",
      "Industrial",
      "Agricultural",
      "Farm House",
      "Urban Farming"
    ]
  }
];

const FILTERS = [
  {
    icon: faLocationDot,
    label: "Location",
    value: "Hyderabad",
    options: ["All Locations", "Hyderabad", "Bengaluru", "Chennai", "Pune"]
  },
  {
    icon: faIndianRupeeSign,
    label: "Budget",
    value: "Any Budget",
    options: ["Any Budget", "Under ₹50L", "₹50L - ₹1Cr", "₹1Cr - ₹2Cr", "Above ₹2Cr"]
  },
  {
    icon: faBuilding,
    label: "Property Type",
    value: "All Types",
    options: PROPERTY_TYPE_OPTIONS
  },
  {
    icon: faShieldHalved,
    label: "Approval",
    value: "Any Approval",
    options: ["Any Approval", "RERA Approved", "HMDA Approved", "DTCP Approved", "Bank Approved"]
  },
  {
    icon: faHardHat,
    label: "Builder",
    value: "All Builders",
    options: ["All Builders", "Aparna", "My Home", "Prestige", "Brigade"]
  },
  {
    icon: faCalendarDays,
    label: "Possession",
    value: "Any Time",
    options: ["Any Time", "Ready to Move", "Within 6 Months", "Within 1 Year", "Under Construction"]
  }
];
function FilterBar({ selectedBuilder = "All Builders", onBuilderChange }) {
  return <div className="vd-filter-wrap">
      {FILTERS.map((f) => <div key={f.label} className="vd-filter-item">
          <div className="vd-fl-label">
            <FontAwesomeIcon icon={f.icon} className="fa-icon" />
            {f.label}
          </div>
          <div className="vd-fl-val">
            <select
    className="vd-fl-select"
    defaultValue={f.label === "Builder" ? undefined : f.value}
    value={f.label === "Builder" ? selectedBuilder : undefined}
    onChange={f.label === "Builder" ? (event) => {
      if (typeof onBuilderChange === "function") {
        onBuilderChange(event.target.value);
      }
    } : undefined}
    aria-label={f.label}
  >
              {f.options.map((option, index) => {
                if (typeof option === "string") {
                  return <option key={option} value={option}>
                      {option}
                    </option>;
                }

                return <optgroup key={`${option.group}-${index}`} label={option.group}>
                    {option.options.map((groupOption) => <option key={`${option.group}-${groupOption}`} value={groupOption}>
                        {groupOption}
                      </option>)}
                  </optgroup>;
              })}
            </select>
          </div>
        </div>)}
      <button className="vd-filter-more-btn">
        <FontAwesomeIcon icon={faSliders} />
        More Filters
      </button>
    </div>;
}
export {
  FilterBar as default
};
