import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-warning fixed-top">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            Goal.com
          </NavLink>
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
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/livescores" className="nav-link">
                  Scores
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/news" className="nav-link">
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/competitions" className="nav-link">
                  Competitions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blogs" className="nav-link">
                  Blogs
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/listfavourite"} className="nav-link">
                   Favourite Teams
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/createfavourite"} className="nav-link">
                  Create Favourite Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default Header;
