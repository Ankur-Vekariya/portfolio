import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container blue circleBehind">
      <div>
        <Link to="/">
          <a>HOME</a>
        </Link>
      </div>
      <div>
        <Link to="/projects">
          <a>PROJECTS</a>
        </Link>
      </div>
      <div>
        <Link to="/portfolio">
          <a>PORTFOLIO</a>
        </Link>
      </div>
      <div>
        <Link to="/about">
          <a>ABOUT</a>
        </Link>
      </div>
      <div>
        <Link to="/contact">
          <a>CONTACT</a>
        </Link>
      </div>
      <div><image  src="/logo.svg" alt="logo"/></div>
    </div>
  );
};

export default Navbar;
