import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import {
  MdHome,
  MdCategory,
  MdPalette,
  MdToggleOff,
  MdToggleOn,
  MdLogout,
} from "react-icons/md";

import useAuth from "../hooks/useAuth";

import "./styles/nav.css";

function Nav(props) {
  const [expanded, setExpanded] = useState(false);

  const { logout } = useAuth();

  return (
    <ul className={`nav ${!expanded ? "nav-collapsed" : ""}`}>
      <span id="expand-button" onClick={() => setExpanded(!expanded)}>
        {expanded ? <MdToggleOn /> : <MdToggleOff />}
      </span>
      <NavLink to="/">
        <li className="nav-item">
          <MdHome />
          <div className="nav-title">Home</div>
        </li>
      </NavLink>
      <NavLink to="/categories">
        <li className="nav-item">
          <MdCategory />
          <div className="nav-title">Categories</div>
        </li>
      </NavLink>
      <NavLink to="/paintings">
        <li className="nav-item">
          <MdPalette />
          <div className="nav-title">Paintings</div>
        </li>
      </NavLink>
      <li className="nav-item" onClick={logout}>
        <MdLogout />
        <div className="nav-title">Logout</div>
      </li>
    </ul>
  );
}

export default Nav;
