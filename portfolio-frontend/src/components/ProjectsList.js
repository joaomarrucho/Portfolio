import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/projects")
      .then((response) => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the projects:", error);
      });
  }, []);

  return (
    <div>
      <h1>MY PROJECTS</h1>
      <div className="projects-introduction">
        <p>
            Welcome to my portfolio! Here you will find a collection of my personal projects, as well as the work I've done during my university studies. These projects showcase my skills in software development, problem-solving, and creativity.
            Whether it’s web applications, system tools, or other software solutions, each project reflects my commitment to continuous learning and improvement. Feel free to explore and discover more about the technologies I’ve worked with and the challenges I’ve overcome along the way.
        </p>
        </div>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.imageUrl} 
                alt={project.name} 
                className="project-image" 
              />
            </div>
            <div className="project-info">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
