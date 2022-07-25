import React from "react";
import "../styles/Projects.css";
import SBF from "../images/Social-Book-Feed.png";
import YTC from "../images/Youtube-Clone.png";
import CA from "../images/Chat-App.png"

const Projects = () => {
  return (
    <div className="project-container">
      <h1 id="Projects">
        const projects &nbsp;= &nbsp;( )&nbsp; {"=>"}&nbsp;&nbsp; {"{"}
      </h1>
      <div className="projects">

      <div className="project1">
        {/* <div className="project-box3"></div> */}
        <img src={CA} alt="Chat App" className="project-box1" />
        <div className="description1">
          <h2>{"<div className=\"title\">"} Chat App {"</div>"}</h2>
          <p>{"<p className=\"project-desc\">"} <br />
            <div className="tab">
              QuadNard Chat is a chat app that allows users to text even when they are both speaking in different languages. The goal for this app is for people to text in their own respective languages and trust us to translate their message into the recipient's language. <br />
            </div>{"</p>"}
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="project2">
        {/* <div className="project-box1"> */}
        <img src={SBF} alt="Social-Book" className="project-box2" />
        {/* </div> */}
        <div className="description2">
          <h2> {"<div className=\"title\">"} Social Book {"</div>"}</h2>
          <p>{"<p className=\"project-desc\">"} <br />
            <div className="tab">
              Social Book is a social media app that uses the MERN stack for it's core architecture. It uses json web tokens (JWTs) to authenticate and authorize registration, login, and logout. Users are currently able to post as they please, and current efforts are pointed towards designing a friend request and messaging system. 
              <br />
            </div>{"</p>"} 
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="project3">
        {/* <div className="project-box1"> */}
        <img src={YTC} alt="Youtube Clone" className="project-box3" />
        {/* </div> */}
        <div className="description3">
          <h2> {"<div className=\"title\">"} Youtube Clone {"</div>"}</h2>
          <p>{"<p className=\"project-desc\">"} <br />
            <div className="tab">
            This is a youtube clone that draws upon youtube's api to watch real videos from the original site.
              <br />
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
