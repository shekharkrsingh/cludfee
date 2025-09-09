import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      author: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      quote: '"John delivered an exceptional one-page application for our startup. His attention to detail and communication throughout the project were outstanding."'
    },
    {
      author: 'Michael Chen',
      role: 'Marketing Director, GrowthLab',
      quote: '"Working with John was a great experience. He transformed our outdated website into a modern, responsive application that has significantly increased our conversions."'
    },
    {
      author: 'Emily Rodriguez',
      role: 'Product Manager, InnovateCo',
      quote: '"John\'s technical expertise and professionalism made our project a success. He was always responsive to our needs and delivered ahead of schedule."'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const showTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials">
      <div className="container">
        <h2 className="section-title">What Clients Say</h2>
        <div className="testimonials-container">
          <div className="testimonials" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <div className="testimonial-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            ))}
          </div>
          <div className="testimonial-nav">
            {testimonials.map((_, index) => (
              <div 
                key={index} 
                className={`testimonial-nav-btn ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => showTestimonial(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;