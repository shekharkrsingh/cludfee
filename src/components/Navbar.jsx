import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // get current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav id="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Clud<span>Fee</span>
        </Link>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="nav-links">
          {/* Show section links only on Home page */}
          {location.pathname === '/' && (
            <>
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#services" onClick={closeMenu}>Services</a></li>
              <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
              <li><a href="#book-call" onClick={closeMenu}>Book a Call</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </>
          )}

          {/* Separate Routes (always visible) */}
         {location.pathname !== '/' && (
          <><li><Link to="/" onClick={closeMenu}>Home</Link></li>
          {/* <li><Link to="/pricing" onClick={closeMenu}>Pricing</Link></li> */}
          <li><Link to="/terms" onClick={closeMenu}>Terms</Link></li>
          <li><Link to="/personal-details" onClick={closeMenu}>Personal Details</Link></li>
          <li><Link to="/privacy-policy" onClick={closeMenu}>Privacy Policy</Link></li>
        </>)}</ul>

        <button
          id="theme-toggle"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <i className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}></i>
        </button>

        <div className="menu-btn" id="menu-btn" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
