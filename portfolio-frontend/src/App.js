import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import FeaturedProjects from './pages/FeaturedProjects';
import AboutMe from './pages/AboutMe';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Router>
      <div>
        {/* Header com Navegação */}
        <header style={{ padding: '10px', backgroundColor: '#262626' }}>
          <nav>
            <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <li><Link to="/" style={{textDecoration: 'none', brightness: '1.5'}}>Home</Link></li>
              <li><Link to="/featured-projects" style={{textDecoration: 'none' }}>Featured Projects</Link></li>
              <li><Link to="/about-me" style={{textDecoration: 'none' }}>About Me</Link></li>
              <li><Link to="/contacts" style={{textDecoration: 'none' }}>Contacts</Link></li>
            </ul>
          </nav>
        </header>

        {/* Rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured-projects" element={<FeaturedProjects />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
