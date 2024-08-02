import React from 'react';
import '../componentscss/Education.css'; // Ensure this path is correct

function Education() {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <h3>University of Rhode Island, Kingston, RI</h3>
      <p><strong>Bachelor of Science in Computer Science</strong>, Minor in Mathematics</p>
      <p>GPA: 3.2, Major GPA: 3.29 - May 2024 (3 Year Graduation)</p>

      <h3>Relevant Coursework:</h3>
      <ul>
        <li>Computer Architecture</li>
        <li>Operating Systems</li>
        <li>Object-Oriented Programming</li>
        <li>Database Management</li>
        <li>Algorithms & Data Structures</li>
        <li>Software Engineering</li>
        <li>Data Science and Statistics</li>
        <li>Scientific Computing</li>
        <li>Dynamic Web Programming</li>
        <li>Advanced Algorithm Design</li>
      </ul>

      <h3>Extracurricular Activities:</h3>
      <p>Member of Lambda Chi Alpha Fraternity, contributing to community service events and leadership activities.</p>
    </div>
  );
}

export default Education;
