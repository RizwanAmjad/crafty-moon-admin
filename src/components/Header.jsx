import React from "react";

import "./styles/header.css";
import navIcon from "./icons/nav-icon.png";

function Header(props) {
  return (
    <div className="header">
      <img src={navIcon} alt="Toggle Nav" className="nav-icon" />
      <h2 className="brand">Crafty Moon</h2>
    </div>
  );
}

export default Header;
