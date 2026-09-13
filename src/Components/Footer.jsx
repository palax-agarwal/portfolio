import React from "react";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-icons">
        <a href="https://github.com/palax-agarwal?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/palax-kumar-agarwal-b88520353/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>


      <p className="footer-text">
        © 2025 All Rights Reserved | Made with ❤️ by <strong>WeMade</strong>
      </p>
    </footer>
  );
};


export default Footer;