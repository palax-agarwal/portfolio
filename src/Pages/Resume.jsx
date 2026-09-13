import React from "react";
import "../Styles/Resume.css";

function Resume() {
  return (
    <div className="resume-page">
      <h1 className="name">Palax Kumar Agarwal</h1>
      <p className="location">Hyderabad, Telangana</p>
      <p className="contact">
        📞 +91 6304687516 | ✉️ palaxagarwal123@gmail.com |
        <a href="http://localhost:5173/" target="_blank">
          Portfolio
        </a>
        <a href="https://www.linkedin.com/in/palax-kumar-agarwal-b88520353/" target="_blank">
          LinkedIn
        </a>
      </p>

      <section>
        <h2>Object</h2>
        <p>
          A dedicated AI/ML Engineering graduate with a strong academic record
          and experience in cross-team collaboration. Passionate about
          designing, implementing, and securing software, with a commitment to
          delivering high-quality results
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>B.Tech - AI/ML:</strong> MRUH|2024-2028
          </li>
          <li>
            <strong>INTERMEDIATE:</strong> SRI CHAITANYA|2022-2024|CGPA:9.44
          </li>
          <li>
            <strong>SCC:</strong> M.N.R THE INDO ENGLISH HIGH SCHOOL|2024-2028|CGPA:8.0
          </li>
        </ul>
      </section>
      <section>
        <h2>Techincal Skills</h2>
        <ul>
          <li>
            <strong>Language :</strong> Python, Java, C, C++
          </li>
          <li>
            <strong>Frameworks & Libraries :</strong> HTML, CSS, JS, REACTJS,
            ANGULAR
          </li>
          <li>
            <strong>Tools :</strong> Figma, Canva, Wordpress
          </li>
        </ul>
      </section>
      <section>
        <h2>Projects</h2>
        <div className="project">
          <h3>Complete Mern Stack Authentication Project</h3>
          <p>Full stack developer Role</p>
          <ul>
            <li>Complete Authentication using Mern stack technologies</li>
            <li><strong>Tech stack :</strong> HTML, CSS, JS, React, NodeJs</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>Reserach Project</h2>
        <ul>
          <li><strong>Expense Track App:</strong> Gmail integration, regex processing, Node.js backed, react frontend</li>
          <li><strong>AgriConnect:</strong> AI voice input, ML price predicition, multilingual farmer interface</li>
        </ul>
      </section>
      <section>
        <h2>Certifications & Workshops</h2>
        <ul>
          <li>Intoduction to Generative AI Studio</li>
          <li>AI Agents For Beginners</li>
          <li>Free Python Course</li>
        </ul>
      </section>
      <section>
        <h2>Extra Curricular Activities</h2>
        <ul>
          <li><strong>Placement Cell student Coordinator :</strong>  Managed placement drives, handled communication.</li>
          <li><strong>Class Representative :</strong> Bridged communication betwwen student and faculty, organized academic discussions.</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
