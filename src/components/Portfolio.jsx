import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      icon: 'fas fa-briefcase',
      title: 'Business Consulting Website',
      description: 'A responsive one-page website for a business consulting firm with appointment booking functionality.',
      tags: ['HTML/CSS', 'JavaScript', 'React']
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for an e-commerce platform with analytics and inventory management.',
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
        <h2 className="section-title">My Work</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
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
                <a href="#" className="btn">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;