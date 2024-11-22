import React from 'react';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroContentStyle}>
          <h1 style={heroTitleStyle}>Welcome to My Portfolio</h1>
          <p style={heroSubtitleStyle}>
            A journey through my work, passion, and creativity in software development.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section style={introSectionStyle}>
        <h2 style={introTitleStyle}>About This Portfolio</h2>
        <p style={introTextStyle}>
          My name is João, a software developer passionate about building innovative solutions and solving complex challenges. This portfolio showcases a curated collection of my university projects, personal endeavors, and professional achievements. 
        </p>
        <p style={introTextStyle}>
          From web applications to backend systems, each project reflects my dedication to learning and evolving in the ever-changing tech landscape.
        </p>
      </section>
    </div>
  );
};

/* Styles for Home.js */
const heroSectionStyle = {
  backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/999/916/949/reflection-nature-twilight-lake-wallpaper-preview.jpg')", // Replace with your hero image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '60vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textAlign: 'center',
};

const heroContentStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adds a dark overlay for better text visibility
  padding: '20px',
  borderRadius: '10px',
};

const heroTitleStyle = {
  fontSize: '3em',
  margin: '0',
  fontWeight: 'bold'
};

const heroSubtitleStyle = {
  fontSize: '1.2em',
  margin: '10px 0 0',
};

const introSectionStyle = {
  padding: '40px 20px',
  color: '#fff',
  textAlign: 'left',
};

const introTitleStyle = {
  fontSize: '2em',
  marginBottom: '20px',
  textAlign: 'left',
};

const introTextStyle = {
  fontSize: '1.2em',
  lineHeight: '1.8',
  marginBottom: '20'
};

export default Home;