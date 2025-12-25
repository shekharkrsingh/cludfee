import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title" style={{textAlign: 'center'}}>About Me</h2>
            <p>Hello! I'm Shekhar Singh, a passionate full-stack developer with over 2 years of
              experience building web applications for businesses of all sizes.</p>
            <p>I specialize in creating high-performance, responsive one-page applications
              that help businesses achieve their goals. My approach combines technical
              expertise with a deep understanding of user experience to create solutions that
              not only look great but also deliver real results.</p>
            <p>When I'm not coding, you can find me contributing to open-source projects,
              exploring new technologies, or sharing my knowledge through tech blogs and
              tutorials.</p>
            <div className="about-stats">
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
          <div className="about-image">
            <div className="profile-image-placeholder">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;