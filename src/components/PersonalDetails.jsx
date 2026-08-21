import React from 'react';
import Seo from "./Seo";
import ParticlesBackground from './ParticlesBackground';

const PersonalDetails = () => {
  return (
    <div className="personal-container">
      <ParticlesBackground />
      <Seo
        title="Developer CludFee | Full Stack Developer & AI Solutions Expert" 
        description="Learn more about CludFee, a full stack developer specializing in React, Spring Boot, cloud architecture, and AI-powered applications." 
        canonical="https://cludfee.netlify.app/personal-details"
      />

      <h1 className="section-title reveal">About CludFee</h1>

      {/* Profile & Intro */}
      <div className="profile-section">
        <div className="reveal-left">
          <div className="profile-image-container">
            <img 
              src="/profile.jpg" 
              alt="Shekhar Singh Portrait" 
              className="profile-image" 
              loading="lazy"
            />
          </div>

          <div className="info-card" style={{ marginTop: '30px' }}>
            <h3>Personal Info</h3>
            <p><strong>Name:</strong> Shekhar Singh</p>
            <p><strong>Location:</strong> Bengaluru, KA</p>
            <p><strong>Email:</strong> cludfee@gmail.com</p>
            <p><strong>Phone:</strong> +91 95088 39640</p>
            <p><strong>Freelance:</strong> Available</p>
          </div>
        </div>

        <div className="profile-details reveal-right">
          <h2>Full Stack Developer</h2>
          <p>
            With over 2 years of experience in web development, I specialize in creating high-performance, 
            responsive applications that help businesses achieve their goals. I work across the full stack, 
            bringing designs to life with clean frontend components and powering them with robust, scalable backends.
          </p>

          <div className="skills-grid reveal-stagger">
            <div className="reveal">
              <strong>Frontend Development</strong>
              <div className="progress-bar">
                <div style={{ '--progress-width': '95%' }}></div>
              </div>
            </div>
            <div className="reveal">
              <strong>Backend Development</strong>
              <div className="progress-bar">
                <div style={{ '--progress-width': '90%' }}></div>
              </div>
            </div>
            <div className="reveal">
              <strong>UI/UX Design</strong>
              <div className="progress-bar">
                <div style={{ '--progress-width': '85%' }}></div>
              </div>
            </div>
            <div className="reveal">
              <strong>Database Design</strong>
              <div className="progress-bar">
                <div style={{ '--progress-width': '88%' }}></div>
              </div>
            </div>
          </div>

          <p>
            My goal is to bridge the gap between complex engineering and beautiful, intuitive interfaces. 
            I continuously explore new technologies, cloud deployment options, and AI automation patterns to deliver 
            exceptional value to my clients.
          </p>
        </div>
      </div>

      {/* Education & Experience */}
      <div className="info-card reveal">
        <h2 className="center">Education & Experience</h2>
        <div className="edu-exp-grid">
          <div>
            <h3>Education</h3>
            <div style={{ marginBottom: '20px' }}>
              <h4>Bachelor of Computer Science</h4>
              <p className="highlight">IIST Indore, 2020-2024</p>
              <p>Specialized in Web Technologies, Cloud Architecture, and Software Engineering principles.</p>
            </div>
          </div>

          <div>
            <h3>Experience</h3>
            <div style={{ marginBottom: '20px' }}>
              <h4>Software Engineer</h4>
              <p className="highlight">Inspiron Labs, 2025-Present</p>
              <p>Developing robust, scalable web products using modern JS frameworks and Spring Boot microservices.</p>
            </div>
            <div>
              <h4>Freelance Developer</h4>
              <p className="highlight">2024-Present</p>
              <p>Building high-performing, search-optimized single-page web applications for small and medium businesses.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="info-card reveal">
        <h2 className="center">Certifications</h2>
        <div className="cert-grid">
          <div>
            <i className="fab fa-react cert-icon"></i>
            <h4>React Developer Certification</h4>
            <p>Advanced React concepts, state managers, and custom hooks optimization.</p>
          </div>
          <div>
            <i className="fab fa-java cert-icon"></i>
            <h4>Java FullStack Developer</h4>
            <p>Enterprise Application Development with Java, Spring Boot, and database integrations.</p>
          </div>
          <div>
            <i className="fas fa-database cert-icon"></i>
            <h4>MySQL Certified Developer</h4>
            <p>Relational database schemas, triggers, procedures, and performance profiling.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
