import React from "react";

import { Link } from "react-router-dom";

import "./styles/nav.css";

function Nav(props) {
  return (
    <ul className="nav">
      <Link to="/">
        <li className="nav-item">Home</li>
      </Link>
      <Link to="/categories">
        <li className="nav-item">Categories</li>
      </Link>
      <Link to="/paintings">
        <li className="nav-item">Paintings</li>
      </Link>
    </ul>
  );
}

export default Nav;
