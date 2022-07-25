import React from "react";
import "../styles/StartPage.css";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import resume from "../images/JustinHued_FontEndDEV.pdf"

export const StartPage = () => {
  return (
    <div className="start-container">
      <div className="keepitsimple">
        <h1>
          <a href="/Portfolio" className="KText"> Keep</a>
          <a href="/Portfolio" className="KText"> It</a>
          <a href="/Portfolio" className="KText"> Simple.</a>
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
        <a href={resume} className="resume"
        target={"_blank"}
        rel="noreferrer"
        >
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
