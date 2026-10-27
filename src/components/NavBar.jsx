import React from "react";
import { Link } from "react-router-dom";

import "../css/Navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie app</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">home</Link>
        <Link to="/favorites">favorites</Link>
      </div>
    </div>
  );
}

export default NavBar;
