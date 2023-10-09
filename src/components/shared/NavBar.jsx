import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { lengthpanier } = useSelector((state) => state.panier);

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Hajar's training
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive && "active"}`}
                  to="/"
                  aria-current="page"
                >
                  Shop
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive && "active"}`}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive && "active"}`}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item text-end">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive && "active"}`}
                  to="/panier"
                >
                  <FaShoppingCart />
                  <span class="badge badge-light ">{lengthpanier}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
