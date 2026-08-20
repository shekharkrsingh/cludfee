import React from 'react';
import { Link } from 'react-router-dom';
import ParticlesBackground from './ParticlesBackground';
import Seo from './Seo';

const PageNotFound = () => {
  return (
    <div className="notfound-container" style={{ position: 'relative', overflow: 'hidden' }}>
      <ParticlesBackground />
      <Seo
        title="404 - Page Not Found | CludFee" 
        description="Oops! The page you're looking for does not exist. Return to CludFee's homepage or explore our services." 
        canonical="https://cludfee.netlify.app/404"
      />

      <div className="glow-blob-2" style={{ bottom: '10%', left: '5%' }}></div>

      <div className="notfound-card reveal-scale">
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
          <Link to="/" className="btn">
            <i className="fas fa-home" style={{ marginRight: '8px' }}></i> Go Home
          </Link>
          <Link to="/contact" className="btn btn-secondary" style={{ marginLeft: '15px' }}>
            <i className="fas fa-envelope" style={{ marginRight: '8px' }}></i> Contact Me
          </Link>
        </div>
      </div>

      {/* Additional Help Section */}
      <div className="notfound-help reveal">
        <h3>Need Help?</h3>
        <p>If you can't find what you're looking for, try these options:</p>
        <div className="notfound-grid reveal-stagger">
          <div>
            <h4><i className="fas fa-sitemap" style={{ marginRight: '8px' }}></i> Site Map</h4>
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '10px' }}>
              <li style={{ marginBottom: '8px' }}><Link to="/">Home</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/personal-details">About Me</Link></li>
            </ul>
          </div>
          <div>
            <h4><i className="fas fa-file-alt" style={{ marginRight: '8px' }}></i> Legal</h4>
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '10px' }}>
              <li style={{ marginBottom: '8px' }}><Link to="/contact">Contact</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
