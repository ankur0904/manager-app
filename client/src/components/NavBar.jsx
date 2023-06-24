import React from "react";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#fff" }}
      
    >
      <div className="container-fluid mx-5 py-3 mb-4 border-bottom">
        <a className="navbar-brand" href="/#">
          Manager
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-nav-pills">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">
                Weekly Planner
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/#">
                Important Date
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/#">
                Timer
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary" href="/#">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
