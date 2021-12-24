import React from "react";

import "./styles/nav.css";

function Nav(props) {
  return (
    <ul className="nav">
      <li className="nav-item">Home</li>
      <li className="nav-item">Categories</li>
      <li className="nav-item">Paintings</li>
    </ul>
  );
}

export default Nav;
