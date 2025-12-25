import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">Clud<span>Fee</span></div>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/personal-details">About Developer</Link></li>
            {/* <li><Link to="/terms">Terms</Link></li> */}
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            {/* <li><Link to="/pricing">Pricing</Link></li> */}
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 CludFee</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
