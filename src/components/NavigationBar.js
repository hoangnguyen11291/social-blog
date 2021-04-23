import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/blogger_512.png";

const NavigationBar = () => {
  return (
    <nav className="navigation">
      <input type="checkbox" id="nav-toggle" />
      <img src={logo} alt="Logo" className="logo" width="80px" />

      <ul className="links">
        <li>
          <Link className="a-link" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="a-link" to="/login">
            Log In
          </Link>
        </li>
      </ul>

      <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
    </nav>
  );
};

export default NavigationBar;
