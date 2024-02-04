import React from 'react';
import '../componentscss/Skills.css'; // Ensure this path is correct

const Skills = () => {
  const skillsCategories = {
    'Programming Languages': ['C', 'C++', 'Python', 'ReactJS', 'NodeJS'],
    'Tools & Platforms': ['Git', 'SQL', 'AWS', 'CMake', 'QT'],
    'Operating Systems': ['Unix (Bash)', 'Windows']
  };

  return (
    <div className="skills-container">
      <h2 className="title">Skills</h2>
      {Object.entries(skillsCategories).map(([category, skills], index) => (
        <div key={index} className="skills-section">
          <h3 className="skills-category">{category}</h3>
          <ul className="skills-list">
            {skills.map((skill, skillIndex) => (
              <li key={skillIndex} className="skill">{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
