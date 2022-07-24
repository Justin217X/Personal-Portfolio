import React from "react";
import "../styles/Projects.css";
import SBF from "../images/Social-Book-Feed.png";
import YTC from "../images/Youtube-Clone.png";

const Projects = () => {
  return (
    <div className="project-container">
      <h1 id="Projects">
        const projects &nbsp;= &nbsp;( )&nbsp; {"=>"}&nbsp;&nbsp; {"{"}
      </h1>
      <div className="projects">
      <div className="project1">
        {/* <div className="project-box1"> */}
        <img src={SBF} className="project-box1" />
        {/* </div> */}
        <div className="description1">
          <h2> {"<div className=\"title\">"} Social Book {"</div>"}</h2>
          <p>{"<p className=\"project-desc\">"} <br />
            <div className="tab">
              Social Book is a social media app that uses json web tokens (JWTs) to authenticate registration, login, and logout. <br />
            </div>{"</p>"} 
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="project2">
        <div className="description2">
          <h2>{"<div className=\"title\">"} Youtube Clone {"</div>"}</h2>
          <p>{"<p className=\"project-desc\">"} <br />
            <div className="tab">
              This is a youtube clone that draws upon youtube's api to watch real
              videos<br />
            </div>{"</p>"}
          </p>
        </div>
        {/* <div className="project-box2"></div> */}
        <img src={YTC} className="project-box2" />
      </div>
      <br />
      <br />
      <br />
      <div className="project3">
        <div className="project-box3"></div>
        <div className="description3">
          <h2>{"<div className=\"title\">"} Chat App {"</div>"}</h2>
          <p>{"<p className=\"project-desc\">"} <br />
            <div className="tab">
              Chat App is a chat app that not only allows users to text in real
              time, but also allows them to text in different languages<br />
            </div>{"</p>"}
          </p>
        </div>
      </div>
      </div>
      <h1 className="close">{"}"}</h1>
    </div>
  );
};

export default Projects;
