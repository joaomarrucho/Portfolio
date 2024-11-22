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
      <h1>Explore My Work</h1>
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
