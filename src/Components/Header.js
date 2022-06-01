import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="home">
          Scissor Seven
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Season-1">
                Season 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Season-2">
                Season 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Season-3">
                Season 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
