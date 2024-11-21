import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/projects")
      .then((response) => {
        console.log(response.data);  // Adicione isto para verificar os dados
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the projects:", error);
      });
  }, []);
  

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            {project.imageUrl && <img src={project.imageUrl} alt={project.name} />}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
