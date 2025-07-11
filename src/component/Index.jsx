import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

function Index() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid position-relative">

          {/* Mobile: Hamburger + Search */}
          {isMobile && (
            <div className="d-flex align-items-center">
              <button
                className="btn btn-link text-white p-0 me-3 custom-toggler"
                onClick={() => setSidebarOpen(true)}
              >
                <i className="fas fa-bars fs-3"></i>
              </button>
              <a href="#" className="text-white fs-5"><i className="fas fa-search"></i></a>
            </div>
          )}

          {/* Center logo */}
          <div className="mx-auto logo-wrapper">
            <img src="/images/logo.png" alt="Logo" className="navbar-logo" />
          </div>

          {/* Desktop nav */}
          {!isMobile && (
            <div className="collapse navbar-collapse d-lg-flex" id="navbarSupportedContent">
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
          )}
        </div>
      </nav>

      {/* Sidebar and overlay (mobile only) */}
      {isMobile && (
        <>
          <div className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
              <button className="btn btn-link text-white fs-4" onClick={() => setSidebarOpen(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <ul className="list-unstyled mt-4">
              {links.map(({ name, path }) => (
                <li key={name} className="mb-3">
                  <Link
                    className={`custom-nav-link fs-5 ${currentPath === path ? "active" : ""}`}
                    to={path}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
        </>
      )}
    </>
  );
}

export default Index;
