import React from "react";
import "../styles/Header.css";
import Nav from "./Navigation";

import image from "../images/cloud.png";
const Header = (props) => {
  return (
    <header>
      <Nav />
      <div className="flex-container">
        <h1 className="title">
          Weather <span>Channel</span>
        </h1>
        <img src={image} alt="" className="header-image" />
      </div>
    </header>
  );
};

export default Header;
