import React from 'react';

const TechStack = () => {
  const techCategories = [
    {
      title: 'Frontend',
      technologies: [
        { icon: 'fab fa-html5', name: 'HTML5' },
        { icon: 'fab fa-css3-alt', name: 'CSS3' },
        { icon: 'fab fa-js-square', name: 'JavaScript' },
        { icon: 'fab fa-react', name: 'React.js' }
      ]
    },
    {
      title: 'Backend',
      technologies: [
        { icon: 'fab fa-java', name: 'Java' },
        { icon: 'fas fa-leaf', name: 'Spring Boot' }
      ]
    },
    {
      title: 'Databases',
      technologies: [
        { icon: 'fas fa-database', name: 'MongoDB' },
        { icon: 'fas fa-database', name: 'MySQL' }
      ]
    },
    {
      title: 'AI & Modern Tools',
      technologies: [
        { icon: 'fas fa-robot', name: 'ChatGPT' },
        { icon: 'fas fa-brain', name: 'Google Gemini' }
      ]
    }
  ];

  return (
    <section id="tech">
      {/* Ambient glow in background */}
      <div className="glow-blob-2" style={{ top: '20%', right: '10%', width: '350px', height: '350px' }}></div>
      
      <div className="container">
        <h2 className="section-title reveal">Technologies I Work With</h2>
        
        <div className="tech-categories reveal-stagger">
          {techCategories.slice(0, 2).map((category, index) => (
            <div key={index} className="tech-category">
              <h3>{category.title}</h3>
              <div className="tech-icons">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-icon">
                    <i className={tech.icon}></i>
                    <p>{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="tech-categories reveal-stagger" style={{ marginTop: '30px' }}>
          {techCategories.slice(2).map((category, index) => (
            <div key={index} className="tech-category">
              <h3>{category.title}</h3>
              <div className="tech-icons">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-icon">
                    <i className={tech.icon}></i>
                    <p>{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;