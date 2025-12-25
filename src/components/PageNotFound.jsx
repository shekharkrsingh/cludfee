import React from 'react';
import { Link } from 'react-router-dom';
import Seo from './Seo';

const PageNotFound = () => {
  return (
    <div className="notfound-container">
      <Seo
        title="404 - Page Not Found | CludFee" 
        description="Oops! The page you’re looking for does not exist. Return to CludFee’s homepage or explore our services." 
        canonical="https://cludfee.netlify.app/404"
      />
      <div className="notfound-card">
        {/* Animated 404 Text */}
        <div className="notfound-code">404</div>

        <h2>Page Not Found</h2>
        <p className="notfound-text">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Animated Graphic */}
        <div className="notfound-icon">
          <i className="fas fa-search"></i>
        </div>

        {/* Action Buttons */}
        <div className="notfound-actions">
          <Link to="/" className="btn btn-secondary">
            <i className="fas fa-home"></i> Go Home
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            <i className="fas fa-envelope"></i> Contact Me
          </Link>
          <button className="btn btn-secondary" onClick={() => window.history.back()}>
            <i className="fas fa-arrow-left"></i> Go Back
          </button>
        </div>
      </div>

      {/* Additional Help Section */}
      <div className="notfound-help">
        <h3>Need Help?</h3>
        <p>If you can't find what you're looking for, try these options:</p>

        <div className="notfound-grid">
          <div>
            <h4><i className="fas fa-sitemap"></i> Site Map</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/personal-details">About Me</Link></li>
              {/* <li><Link to="/pricing">Pricing</Link></li> */}
              {/* <li><Link to="/portfolio">Portfolio</Link></li> */}
            </ul>
          </div>
          <div>
            <h4><i className="fas fa-file-alt"></i> Legal</h4>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
