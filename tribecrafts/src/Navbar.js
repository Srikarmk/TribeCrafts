import React from "react";
import { Link } from "react-router-dom";
import logo from "./tc_logo.png";
import "./Navbar.css";

const Navbar = () => {
  const name = localStorage.getItem("Username");
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <header className="nav">
        <nav className="nav__container__actions">
          <img src={logo} alt="logo" style={{ width: 200 }} />
          <ul className="nav-side">
            <li>
              <Link to="/Home" className="removeUnder">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Categories" className="removeUnder">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/Shop" className="removeUnder">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/ContactUs" className="removeUnder">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/Cart" className="removeUnder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
                </svg>
              </Link>
            </li>
            <li>
              {name ? (
                <ul>
                  <li>
                    <Link to="/" className="removeUnder">
                      {name}
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="removeUnder" onClick={handleClick}>
                      Logout
                    </Link>
                  </li>
                </ul>
              ) : (
                <Link to="/Auth" className="removeUnder">
                  Signup
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
