import React from "react";


function FanCatWidget() {
  return (
    <div className="always-extreme">
      <div className="mascot">
        {/* waving flag */}
        <div className="flag">
          <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="40" rx="4" fill="#00ff66" />
            <text
              x="10"
              y="25"
              fontFamily="Arial Black, sans-serif"
              fontSize="14"
              fill="#000"
            >
              XG
            </text>
          </svg>
        </div>

        {/* mascot */}
        <div className="person">
          <div className="head"></div>
          <div className="body"></div>
        </div>
      </div>

      <div className="tag">
        <p>
          ALWAYS <span>EXTREME</span>
        </p>
      </div>
    </div>
  );
}

export default  FanCatWidget