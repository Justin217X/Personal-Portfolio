import React from "react";
import "../styles/StartPage.css";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";

export const StartPage = () => {
  return (
    <div className="start-container">
      <div className="keepitsimple">
        <h1>
          <a href="/Portfolio"> Keep</a>
          <a href="/Portfolio"> It</a>
          <a href="/Portfolio"> Simple.</a>
        </h1>
      </div>
      <div className="icons">
        <a
          href="https://github.com/Justin217X"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            className="github"
            src={github}
            alt="Linked In Logo"
            width="100px"
          />
        </a>
        <a href="/" className="resume">
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/justin-hued-35208a244/"
          target={"_blank"}
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linked In Logo" width="100px" />
        </a>
      </div>
    </div>
  );
};
