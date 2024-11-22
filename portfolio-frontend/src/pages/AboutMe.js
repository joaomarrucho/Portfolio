import React from "react";
import "../styles/AboutMe.css";
import { FaJava, FaJs, FaNodeJs, FaDatabase } from "react-icons/fa"; // Ícones Font Awesome
import { SiKotlin, SiAngular, SiSqlite } from "react-icons/si"; // Ícones Simple Icons


const AboutMe = () => {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Kotlin", icon: <SiKotlin /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "SQL", icon: <FaDatabase /> }
  ];

  return (
    <div className="about-me-container">
      <h1 className="about-me-title">About Me</h1>
      <div className="about-me-content">
        <img 
          src="https://media.licdn.com/dms/image/v2/C4E03AQE-GWOGh7KZhA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1613097040537?e=1737590400&v=beta&t=2Ip6fWepjjKXue9RObvM-IZowxFvwagVd8O4_Mz03UQ" 
          alt="João Marrucho" 
          className="about-me-photo"
        />
        <div className="about-me-text">
          <p>
            Hello! My name is <strong>João Marrucho</strong>, and I’m a passionate Software Developer from Portugal.  
            I specialize in designing and building efficient, reliable, and creative software solutions, with a focus on 
            web applications and backend systems.
          </p>
          <p>
            Currently, I’m working as a developer where I focus on delivering impactful solutions using modern technologies
            such as <strong>Angular</strong>, <strong>Node.js</strong>, and SQL-based databases. My professional experience also 
            includes L2/L3 technical support, ensuring the systems I build are as reliable as they are functional.
          </p>
          <p>
            I hold a <strong>Bachelor’s degree in Computer Science</strong>, where I developed a strong foundation in
            programming, algorithms, and systems design. During my studies, I worked on several academic and personal 
            projects that helped me refine my skills in languages like Java, Kotlin, and JavaScript.
          </p>
          <p>
            In my free time, I enjoy practicing martial arts, hiking, climbing, and exploring challenging trails.  
          </p>
        </div>
      </div>
      <div className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
