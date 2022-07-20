import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="project-container">
      <h1 id="Projects">Projects</h1>
      <div className="project1">
        <div className="project-box1"></div>
        <div className="description1">
          <h2>Social Book</h2>
          <p>Social Book. A social media website.</p>
        </div>
      </div>
      <div className="project2">
        <div className="description2">
          <h2>Youtube Clone</h2>
          <p>
            This is a youtube clone that draws upon youtube's api to watch real
            videos
          </p>
        </div>
        <div className="project-box2"></div>
      </div>
      <div className="project3">
        <div className="project-box3"></div>
        <div className="description3">
          <h2>Social Book</h2>
          <p>Social Book. A social media website.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
