import React from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
  const { navTitle, screenMode, darkModebtn } = props;

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${screenMode} bg-${screenMode}`}
      >
        <Link className="navbar-brand mx-3" to="/">
          {navTitle}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/bbcnews">
                BBC News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/foxnews">
                Fox News
              </Link>
            </li>
          </ul>
        </div>

        {/* dark mode Button */}

        <button
          type="button"
          onClick={darkModebtn}
          className={`btn btn-outline-secondary text-${
            screenMode === "light" ? "dark" : "light"
          }`}
        >
          {screenMode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
