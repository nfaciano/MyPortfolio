// src/components/ContactMe.js
import React from 'react';
import '../componentscss/ContactMe.css'; // Make sure to create this CSS file and link it correctly

function ContactMe() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-intro">
        If you have any questions, job opportunities, or just want to say hi,
        feel free to drop a message!
      </p>
      <div className="contact-details">
        <p>You can email me directly at <a href="mailto:NickFac88@gmail.com">NickFac88@gmail.com</a></p>
        <p>Or connect with me on <a href="https://linkedin.com/in/nfaciano" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </div>
    </div>
  );
}

export default ContactMe;
