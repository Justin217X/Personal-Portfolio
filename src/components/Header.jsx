import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left"></div>
      <div className="header-right">
        <div className="header-option">
          <a href="/"> .home() </a>
        </div>
        <div className="header-option">
          <a href="#About"> .about() </a>
        </div>
        <div className="header-option">
          <a href="#Projects"> .projects() </a>
        </div>
        <div className="header-option">
          <a href="#ContactMe"> .contactMe() </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
