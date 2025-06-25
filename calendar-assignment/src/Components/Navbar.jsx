import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light mb-4"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        height: "56px",
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="navbar-brand" style={{ visibility: "hidden" }}>
          Calendar App
        </span>
        <div className="d-flex gap-3">
          <Link
            className="nav-link btn btn-link"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            className="nav-link btn btn-link"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
            to="/meetings"
          >
            Meetings
          </Link>
        </div>
        <div>
          <Link
            className="nav-link btn btn-link"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;