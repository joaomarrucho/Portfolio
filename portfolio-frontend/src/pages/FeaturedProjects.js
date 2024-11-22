import React from 'react';
import ProjectsList from '../components/ProjectsList';

const FeaturedProjects = () => (
    <div className="Featured-Projects">
    <ProjectsList />
    <footer className="contact-info">
      <div className="contact-item">
        <h2>João Marrucho</h2>
      </div>
      <div className="contact-item">
        <a href="mailto:joao@example.com">joaopaulomarrucho@gmail.com</a>
      </div>
      <div className="contact-item">
        <a href="https://github.com/joaomarrucho/Portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div className="contact-item">
        <a href="tel:+351123456789">+351 961 937 002</a>
      </div>
    </footer>
  </div>
);

export default FeaturedProjects;
