import React from "react";
import "../styles/About.css";
import Image from "../assets/palaxx.jpeg";

function About() {
  return (
    <div className="about-wrapper">
      <h2 className="section-title">About Me</h2>
      <div className="section-intro">
        <p>
        I am a passionate Full Stack Developer with a focus on building
        responsive and user-friendly web applications. My journey in b-tech has
        equipped me with a diverse skill set, enabling me to tackle various
        challenges in the development process.
      </p>
      </div>
      

      <div className="about-main">
        <div className="about-left">
          <img src={Image} alt=" about" />
        </div>
        <div className="about-right">
          <p className="intro-text">
            I enjoy collaborating with cross-functional teams to deliver
            high-quality products and continuously seek opportunities to learn
            and grow in this ever-evolving field.
          </p>
          <div className="info-grid">
            <div className="info-item">
              <strong>Date of Birth:</strong> 07/03/2007
            </div>
            <div className="info-item">
              <strong>website:</strong> <a href="/">check here</a>
            </div>
            <div className="info-item">
              <strong>Phone:</strong> 6304687516
            </div>
            <div className="info-item">
              <strong>City:</strong> Hyderabad
            </div>
            <div className="info-item">
              <strong> Age:</strong> 18
            </div>
            <div className="info-item">
              <strong>Degree:</strong> B-Tech
            </div>
            <div className="info-item">
              <strong>Email:</strong> palaxagarwal123@gmail.com
            </div>
            <div className="info-item">
              <strong>Ready to work:</strong> Ready..
            </div>
          </div>
          <p className="final-text">
            I had done the project using react and vanta.js for the background
            effect. I am always eager to learn new technologies and improve my
            skills. Let's connect and create something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;