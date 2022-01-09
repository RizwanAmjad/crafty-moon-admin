import React from "react";

import { NavLink } from "react-router-dom";

import "./styles/nav.css";

function Nav(props) {
  return (
    <ul className="nav">
      <NavLink to="/">
        <li className="nav-item">Home</li>
      </NavLink>
      <NavLink to="/categories">
        <li className="nav-item">Categories</li>
      </NavLink>
      <NavLink to="/paintings">
        <li className="nav-item">Paintings</li>
      </NavLink>
    </ul>
  );
}

export default Nav;
