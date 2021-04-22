import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar className="navigation" expand="lg">
      <Navbar.Brand className="mr-auto">
        <h3>LOGO HERE</h3>
      </Navbar.Brand>

      <Nav className="ml-auto">
        <div>
          <Link className="link" to="/">
            Home
          </Link>
        </div>

        <div>
          <Link className="link" to="/login">
            Log In
          </Link>
        </div>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
