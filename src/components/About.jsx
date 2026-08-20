import React from 'react';

const About = () => {
  return (
    <section id="about">
      {/* Ambient background blob */}
      <div className="glow-blob-3" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(217, 70, 239, 0.2) 0%, transparent 70%)', bottom: '-5%', right: '5%' }}></div>
      
      <div className="container">
        <div className="about-content">
          <div className="about-text reveal-left">
            <h2 className="section-title" style={{ textAlign: 'left', display: 'inline-block', width: 'auto' }}>About Me</h2>
            <p>
              Hello! I'm Shekhar Singh, a passionate full-stack developer with over 2 years of
              experience building web applications for businesses of all sizes.
            </p>
            <p>
              I specialize in creating high-performance, responsive applications
              that help businesses achieve their goals. My approach combines technical
              expertise with a deep understanding of user experience to create solutions that
              not only look premium but also deliver real business results.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source projects,
              exploring new cloud architectures, or sharing my knowledge through technical articles and mentoring.
            </p>
            
            <div className="about-stats reveal-stagger">
              <div className="stat">
                <div className="stat-number">2+</div>
                <div className="stat-text">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">10+</div>
                <div className="stat-text">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">6+</div>
                <div className="stat-text">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className="about-image reveal-right">
            <div className="profile-image-container">
              <img 
                src="/profile.jpg" 
                alt="Shekhar Singh - Full Stack Developer" 
                className="profile-image" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;