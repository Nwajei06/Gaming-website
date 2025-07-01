import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

function Index() {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Community", path: "/community" },
    { name: "Tournament", path: "/tournaments" },
    { name: "Company", path: "/company" },
    { name: "Shop", path: "/shop" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#000', color: '#fff' }}>
        <div className="container-fluid">
          <img src="/images/logo.png" alt="Logo" style={{ height: '40px' }} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link className="navbar-brand text-white" to="/">Esport</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map(({ name, path }) => (
                <li className="nav-item" key={name}>
                  <Link
                    className={`nav-link custom-nav-link ${currentPath === path ? "active" : ""}`}
                    to={path}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center ms-auto gap-3">
              <a href="#" className="text-white"><i className="fas fa-search"></i></a>
              <a href="#" className="text-white"><i className="fas fa-shopping-cart"></i></a>
              <a href="#" className="text-white"><i className="fas fa-bell"></i></a>

              <Link to="/login"><button className="btn btn-outline-light border-white">Login</button></Link>
              <Link to="/signup"><button className="btn btn-light text-dark">Sign Up</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Index;
