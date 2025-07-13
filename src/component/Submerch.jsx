import React from 'react';
import { Link } from 'react-router-dom';

function Submerch() {
  return (
    <div className="container-fluid py-4">
      <div className="row d-flex flex-column flex-md-row g-3">
        {/* First image */}
        <div className="col-12 col-md-6">
          <Link to="/shop">
            <img
              src="/images/Frame 40.png"
              alt="Merch 1"
              className="img-fluid rounded shadow-sm w-100"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </Link>
        </div>

        {/* Second image */}
        <div className="col-12 col-md-6">
          <Link to="/shop">
            <img
              src="/images/Frame 1363.png"
              alt="Merch 2"
              className="img-fluid rounded shadow-sm w-100"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Submerch;
