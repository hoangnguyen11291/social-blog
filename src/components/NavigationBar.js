import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { authActions } from "../redux/actions/auth.actions";
import { routeActions } from "../redux/actions/route.actions";

import logo from "../images/blogger_512.png";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const accessToken = localStorage.getItem("accessToken");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.logoutRequest());
  };
  useEffect(() => {
    if (redirectTo) {
      history.push(redirectTo);
      dispatch(routeActions.removeRedirectTo());
    }
  }, [redirectTo]);

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
        {accessToken ? (
          <li>
            <Link className="a-link" to="/" onClick={handleSubmit}>
              Logout
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link className="a-link" to="/register">
                Regiter
              </Link>
            </li>
            <li>
              <Link className="a-link" to="/login">
                Log In
              </Link>
            </li>
          </>
        )}
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
