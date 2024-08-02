import React from 'react';
import Carousel from './Carousel';
import { travelPhotos, foodPhotos } from '../PhotoPaths/photopaths'; // Ensure the path is correct
import '../componentscss/AboutMe.css'; // Ensure this path is correct

function AboutMe() {
  return (
    <div className="about-me-container">
      <section className="intro-section">
        <h2>About Me</h2>
        <p className="intro-text">
          Hi, I'm Nicholas Faciano, a recent graduate from the University of Rhode Island with a degree in Computer Science. I completed my studies in just three years, earning a spot on the Dean's List every semester. My passion lies in low-level programming and system design, where I love pushing the boundaries of what's possible with code. When I'm not diving into the intricacies of technology, you can find me exploring new cities, tasting diverse cuisines, or cooking up something delicious in the kitchen.
        </p>

        <p>
          My tech journey began at 14 when I built my first computer. Since then, I've been captivated by the complexities of programming and the elegance of object-oriented design. I'm especially drawn to the challenges of low-level programming, whether it's fine-tuning bit manipulation or optimizing performance. Iconic software like RollerCoaster Tycoon has been a significant inspiration, showcasing the incredible potential of well-crafted code.
        </p>

        <p>
          Looking ahead, I aim to bring the same attention to detail and problem-solving skills to my future projects and career. I'm excited about the prospect of working on cutting-edge software or developing new systems that redefine what's possible in technology.
        </p>

        <p>
          Beyond my technical interests, I have a deep appreciation for exploring the world through travel and food. Each destination and dish offers a unique cultural experience, enriching my understanding and sparking my creativity. Cooking, in particular, has become a way for me to celebrate and share these flavors and traditions at home.
        </p>
      </section>
      
      <section className="travels-section">
        <h3>My Travels</h3>
        <Carousel images={travelPhotos} />
      </section>
      
      <section className="culinary-section">
        <h3>My Culinary Adventures</h3>
        <Carousel images={foodPhotos} />
      </section>
      
      <section className="closing-remarks">
        <p>
          Whether I'm exploring new cities or experimenting in the kitchen, the curiosity and passion that drive my academic pursuits also fuel my personal interests. These experiences continually shape who I am, both as an aspiring computer scientist and as a global citizen.
        </p>
      </section>
    </div>
  );
}

export default AboutMe;
