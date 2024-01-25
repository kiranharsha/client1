import React from "react";
import { Link, NavLink, Redirect } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <Link to="" class="navbar-brand mt-2 mt-lg-0">
          <h5 class="pt-1">EXO POC2</h5>
        </Link>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="btn btn-primary"
              >
                Dashboard
              </NavLink>
            </li> */}
            <li className="nav-item">
              <Link to="/user" className="nav-link">
                UserDashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movie" className="nav-link">
                Movie
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
