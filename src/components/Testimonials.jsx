import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials=[
  {
    author: 'Rajesh Kumar',
    role: 'Owner, FitLife Gym',
    quote: '"CludFee built a fantastic website for my gym. It helped attract more members and manage class schedules easily."'
  },
  {
    author: 'Anita Verma',
    role: 'Manager, Spice Villa Restaurant',
    quote: '"Thanks to CludFee’s work, our restaurant now has an online ordering system that’s easy to use and brought in more customers."'
  },
  {
    author: 'Dr. Neelam Joshi',
    role: 'General Practitioner, Joshi Clinic',
    quote: '"CludFee created a professional and simple website for my clinic. Patients can now book appointments online with ease."'
  },
  {
    author: 'Suresh Patel',
    role: 'Owner, Patel Electronics Store',
    quote: '"CludFee designed a modern e-commerce site for my electronics business that helped increase my sales substantially."'
  },
  {
    author: 'Priya Sharma',
    role: 'Founder, Bloom Boutique',
    quote: '"CludFee developed a beautiful site for my boutique. It perfectly reflects my brand and helped me reach more customers online."'
  }
];
;

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