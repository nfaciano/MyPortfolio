import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Skills from './components/Skills'; // Import the Skills component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul className="nav-links">
              <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>About Me</NavLink></li>
              <li><NavLink to="/education" className={({ isActive }) => isActive ? 'active' : undefined}>Education</NavLink></li>
              <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : undefined}>Projects</NavLink></li>
              <li><NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : undefined}>Skills</NavLink></li> 
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>Contact Me</NavLink></li>
            </ul>
          </nav>
        </header>
        <main className="App-content">
          <Routes>
            <Route path="/" element={<AboutMe />} end />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} /> 
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
