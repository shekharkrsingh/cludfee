import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add background/shadow if scrolled past 50px
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav id="navbar" className={`${isScrolled ? 'scrolled' : ''} ${isHidden ? 'nav-hidden' : ''}`}>
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
          <li><Link to="/terms" onClick={closeMenu}>Terms</Link></li>
          <li><Link to="/personal-details" onClick={closeMenu}>Personal Details</Link></li>
          <li><Link to="/privacy-policy" onClick={closeMenu}>Privacy Policy</Link></li>
        </>)}</ul>

        <button
          id="theme-toggle"
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <i className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'} aria-hidden="true"></i>
        </button>

        <button className="menu-btn" id="menu-btn" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
          <i className="fas fa-bars" aria-hidden="true"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
