import React from "react";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../store/features/user/authSlice";

function Navbar() {
  const { lengthpanier } = useSelector((state) => state.panier);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, infoUser } = useSelector((state) => state.auth);

  const signout = () => {
    dispatch(logout());
    navigate("/login");
  };

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
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive && "active"}`}
                  to="/shop"
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
            <ul className="navbar-nav ms-auto">
              {token && (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      {infoUser.username}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={signout}>
                      Logout
                    </button>
                  </li>
                </>
              )}

              {!token && (
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
