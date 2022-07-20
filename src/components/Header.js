import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left"></div>
      <div className="header-right">
        <div className="header-option">
          <a href="#About"> About </a>
        </div>
        <div className="header-option">
          <a href="#Projects"> Projects </a>
        </div>
        <div className="header-option">
          <a href="#ContactMe"> Contact Me </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
