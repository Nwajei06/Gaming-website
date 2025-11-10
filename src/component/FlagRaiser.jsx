import React from "react";
import "./FlagRaiser.css";

export default function FlagRaiser({ mascot = "/images/gold-mascot.png" }) {
  return (
    <div className="fr-widget">
      <div className="fr-mascot">
        <img src={mascot} alt="XG mascot" className="fr-mascot-img" />

        {/* Flag animation */}
        <div className="fr-flag-wrapper">
          {/* <div className="fr-flag-pole" /> */}
          <div className="fr-flag">
            <span className="fr-flag-text">XG</span>
          </div>
        </div>
      </div>

      <div className="fr-tag">ELITE <strong>300</strong></div>
    </div>
  );
}
