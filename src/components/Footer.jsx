import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content reveal">
          <div className="footer-logo">Clud<span>Fee</span></div>
          <ul className="footer-links">
            <li><Link to="/" aria-label="Home">Home</Link></li>
            <li><Link to="/personal-details" aria-label="About Developer">About Developer</Link></li>
            <li><Link to="/privacy-policy" aria-label="Privacy Policy">Privacy Policy</Link></li>
            <li><Link to="/contact" aria-label="Contact">Contact</Link></li>
          </ul>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/shekhar-singh-kr/" target="_blank" rel="noopener noreferrer" className="interactive" aria-label="LinkedIn Profile">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/shekharkrsingh" target="_blank" rel="noopener noreferrer" className="interactive" aria-label="GitHub Profile">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:shekharkumarsingh@gmail.com" className="interactive" aria-label="Email Me">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CludFee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
