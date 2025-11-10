import React from "react";
import { NavLink } from "react-router-dom";
import "./FlagRaiser.css";

export default function FlagRaiser({ mascot = "/images/gold-mascot.png" }) {
  return (
    <div className="fr-widget">
      <div className="fr-mascot">
        {/* clickable area: NavLink set to accept pointer events */}
        <NavLink to="/xg-gold" className="fr-link" aria-label="XG Gold page">
          <img src={mascot} alt="XG mascot" className="fr-mascot-img" />

          {/* Flag animation */}
          <div className="fr-flag-wrapper">
            <div className="fr-flag" role="img" aria-hidden="true">
              <span className="fr-flag-text">XG</span>
            </div>
            {/* <div className="fr-flag-pole" aria-hidden="true" /> */}
          </div>
        </NavLink>
      </div>

      <NavLink to="/xg-gold" className="fr-tag-link">
        <div className="fr-tag">ELITE <strong>300</strong></div>
      </NavLink>
    </div>
  );
}
