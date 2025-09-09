import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">John<span>Doe</span></div>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/personal-details">About Developer</a></li>
            <li><a href="/terms">Terms</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 John Doe - Built with HTML, CSS, JavaScript, and Passion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
