import React from "react";

function Navbar({ setView, onHome }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light mb-4"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#" style={{ visibility: "hidden" }}>
          Calendar App
        </a>
        <div className="mx-auto">
          <button
            className="nav-link btn btn-link"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
            onClick={onHome}
          >
            Home
          </button>
        </div>
        <div>
          <a
            className="nav-link"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
            href="#"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;