import React from 'react';
import Tilt from 'react-parallax-tilt';

const Portfolio = () => {
  const projects = [
    {
      icon: 'fas fa-briefcase',
      title: 'Business Consulting Website',
      description: 'A responsive one-page website for a business consulting firm with appointment booking functionality.',
      tags: ['HTML/CSS', 'JavaScript', 'React']
    },
    {
      icon: 'fas fa-user-md',
      title: 'H-Potion',
      description: 'Is a doctor’s app designed to simplify booking and managing appointments. It streamlines scheduling and helps doctors stay organized for better patient care.',
      tags: ['React', 'Spring Boot', 'MongoDB']
    },
    {
      icon: 'fas fa-utensils',
      title: 'Restaurant Booking System',
      description: 'An online reservation system for a restaurant with table management and customer notifications.',
      tags: ['JavaScript', 'Java', 'MySQL']
    }
  ];

  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="section-title reveal">My Work</h2>
        <div className="portfolio-grid reveal-stagger">
          {projects.map((project, index) => (
            <Tilt 
              key={index} 
              tiltMaxAngleX={8} 
              tiltMaxAngleY={8} 
              perspective={1000} 
              scale={1.02} 
              transitionSpeed={1000} 
              gyroscope={true}
              glareEnable={true} 
              glareMaxOpacity={0.12}
              glareColor="#ffffff" 
              glarePosition="all"
              className="portfolio-item"
            >
              <div className="portfolio-img">
                <i className={project.icon}></i>
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;