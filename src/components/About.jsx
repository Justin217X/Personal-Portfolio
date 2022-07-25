import React from "react";
import "../styles/About.css";
import css from "../images/css.svg";
import git from "../images/git-icon.svg";
import html from "../images/html.svg";
import JS from "../images/logo-javascript.svg";
import mongo from "../images/mongodb-icon.svg";
import node from "../images/nodejs.svg";
import npm from "../images/npm.svg";
import react from "../images/react.svg";

const About = () => {
  return (
    <div className="about">
      <h1 id="About">
        const about &nbsp;= &nbsp;( )&nbsp; {"=>"}&nbsp;&nbsp; {"{"}
      </h1>
      <p>
        I am a front end engineer based in Pennsylvania. I prefer taking a
        divide and conquer approach when it comes to coding to ensure an
        efficient and speedy resolution. I have a results-driven mentality that enables me write clean and coherent code. 
      </p>
      <p>
        I work with React, JavaScript, HTML, and CSS to develop quaility frontend
        products. I also have experience using NodeJS and Express.
      </p>
      <div className="skill-container">
        <div className="skill-scroller">
          <img src={JS} alt="JS Logo" width="50px"></img>
          <img src={react} alt="React Logo" width="50px"></img>
          <img src={html} alt="HTML Logo" width="50px"></img>
          <img src={css} alt="CSS Logo" width="50px"></img>
          <img src={node} alt="Node Logo" height="45px"></img>
          <img src={npm} alt="NPM Logo" height="42px"></img>
          <img src={mongo} alt="Mongo Logo" height="60px"></img>
          <img src={git} alt="Git Logo" width="50px"></img>
        </div>
      </div>
      <h1 className="close">{"}"}</h1>
    </div>
  );
};

export default About;
