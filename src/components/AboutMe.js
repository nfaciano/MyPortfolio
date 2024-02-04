import React from 'react';
import Carousel from './Carousel';
import { travelPhotos, foodPhotos } from '../PhotoPaths/photopaths'; // Ensure the path is correct
import '../componentscss/AboutMe.css'; // Ensure this path is correct

function AboutMe() {
  return (
    <div className="about-me-container">
      <h2>About Me</h2>
      <p>Hello! My name is Nicholas Faciano. As a dedicated student of computer science at the University of Rhode Island, graduating in only three years. My academic journey has been marked by a fascination with low-level system design and a passion for the C++ programming language, which offers a blend of traditional programming discipline with the power of modern computational capabilities.</p>
      
      <p>From building my first computer at the age of 14 to creating complex programs, my commitment to understanding and mastering object-oriented programming has shaped my approach to both problem-solving and project development. I thrive on the challenges presented by low-level programming, finding joy in the detailed process of bit manipulation and optimization. This enthusiasm for direct hardware interaction was further inspired by the success stories of software like Rollercoaster Tycoon, which demonstrated the potential of well-crafted low-level code.</p>
      
      <p>Looking forward, I aim to bring this meticulous attention to detail and love for efficient, elegant solutions to my future projects and career in technology. Whether it's contributing to cutting-edge software or pioneering new systems that leverage the power of low-level programming, I'm eager to push the boundaries of what's possible.</p>
      
      <p>Beyond my academic and technical pursuits, I enjoy exploring the world and its diverse cultures through travel and food. Each journey offers a fresh perspective that enriches my worldview and each dish I prepare is a celebration of flavors and traditions from around the globe.</p>
      
      <h3>My Travels</h3>
      <Carousel images={travelPhotos} />
      
      <h3>My Culinary Adventures</h3>
      <Carousel images={foodPhotos} />
      
      <p>Whether I'm navigating through new landscapes or experimenting in the kitchen, the same curiosity and drive that fuel my academic endeavors also inspire my personal interests. These experiences continually shape who I am, both as a computer scientist and as a global citizen.</p>
    </div>
  );
}

export default AboutMe;
