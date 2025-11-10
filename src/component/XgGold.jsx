import React from "react";
import { NavLink } from "react-router-dom";



function XgGold() {
  return (
    <section className="xggold">
      <div className="xggold-inner">
        {/* Left Side */}
        <div className="xggold-left">
          <div className="xggold-logo">
            <img src="/images/xg-gold-logo.png" alt="XG Logo" />
          </div>

          <div className="xggold-heading">
            <img src="/images/xg-g-herotext.png" alt="XG Gold Heading" />
          </div>

          <div className="xggold-subtext">
            <img src="/images/xg-g-text2.png" alt="XG Gold Description" />
          </div>

          <div className="xggold-buttons">
           <NavLink to="/login"><button className="xg-btn primary">Log in</button> </NavLink> 
         <NavLink to="/">  <button className="xg-btn outline">FAQs</button> </NavLink> 
          </div>
        </div>

        {/* Right Side */}
        <div className="xggold-right">
          <img src="/images/xg-gold.png" alt="Big XG Background" />
        </div>
      </div>
    </section>
  );
}

export default XgGold;
