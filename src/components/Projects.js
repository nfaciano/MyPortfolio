import React from 'react';
import '../componentscss/Projects.css'; // Ensure this path is correct

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Personal Project Portfolio</h3>
        <p>Started Feb 3, 2024 - Created this React web app to display my development projects, highlighting programming skills and system design.</p>
      </div>
      <div className="project-card">
        <h3>Scientific computing</h3>
        <p>Started Feb 2024 - Currently in the works of creating a math library that pairs with mathmatica. The main aim of the project is to address and account for errors in computing (floating point).</p>
        <a href="https://github.com/nfaciano/CSC450_Project" className="view-github-btn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project-card">
        <h3>SaveSphere</h3>
        <p>Oct - Dec 2023 - An innovative platform that intertwines personal finance with social interactions, leveraging C++17 and AWS. Features Crow for RESTful APIs and PostgreSQL. (Repository is private)</p>
      </div>
      <div className="project-card">
        <h3>Operating Systems Maze Simulation</h3>
        <p>Dec 2023 - Demonstrates thread management and synchronization in a maze simulation.</p>
        <a href="https://github.com/nfaciano/C-C-Projects-412/tree/main/Prog07" className="view-github-btn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project-card">
        <h3>Focus Stacking Application</h3>
        <p>Dec 2023 - Combines focus-point images into a single sharp image, using multithreading and mutex locks.</p>
        <a href="https://github.com/nfaciano/C-C-Projects-412/tree/main/Prog06" className="view-github-btn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project-card">
        <h3>Unix Command Executor</h3>
        <p>Oct 2023 - Showcases process management and execution of Unix commands through C++ `fork` and `exec`.</p>
        <a href="https://github.com/nfaciano/C-C-Projects-412/tree/main/Prog04" className="view-github-btn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project-card">
        <h3>Skier Descent Simulation</h3>
        <p>Nov 2023 - A simulation for coordinating multi-process skier navigation using Unix IPC.</p>
        <a href="https://github.com/nfaciano/C-C-Projects-412/tree/main/Prog05" className="view-github-btn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project-card">
        <h3>RecipeMaker</h3>
        <p>Dec 2022 - A C++ suite for recipe management and a virtual fridge tracker, with a wxWidgets graphical interface. Focuses on OOP principles.</p>
        <a href="https://github.com/nfaciano/RecipeMaker" className="view-github-btn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      
    </div>
  );
}

export default Projects;
