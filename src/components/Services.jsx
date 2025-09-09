import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'One-Page Applications',
      description: 'Fast, responsive single-page applications built with modern frameworks like React.js for seamless user experiences.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Design',
      description: 'User-centered design that focuses on creating intuitive interfaces and enjoyable user experiences.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Development',
      description: 'Websites that look and function perfectly on all devices, from desktops to smartphones.'
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Development',
      description: 'Robust server-side solutions using Java and Spring Boot to power your applications.'
    },
    {
      icon: 'fas fa-database',
      title: 'Database Design',
      description: 'Efficient database architecture using MongoDB and MySQL for optimal performance.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your application running smoothly.'
    }
  ];

  return (
    <section id="services">
      <div className="container">
        <h2 className="section-title">Services I Offer</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;