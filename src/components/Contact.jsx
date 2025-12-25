import React, { useState } from 'react';
// import Seo from './Seo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://cludfee.onrender.com/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          contact: formData.number,
          message: formData.message
        })
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          number: '',
          message: ''
        });
      } else {
        const errorText = await response.text();
        console.error("Server error:", errorText);
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("An error occurred. Please check your connection or try again later.");
    }
  };

  return (
    <section id="contact" style={{marginTop: '2rem'}}>
      <div className="container">
        {/* <Seo
          title="Contact CludFee | Get In Touch Today" 
          description="Have a project in mind? Contact CludFee for full stack development, AI solutions, and consultation. Let’s build something great together." 
          canonical="https://cludfee.netlify.app/contact"
        /> */}

        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name<span>*</span></label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="number">Contact No</label>
                <input 
                  type="text" 
                  id="number" 
                  value={formData.number}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address<span>*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message<span>*</span></label>
                <textarea 
                  id="message" 
                  rows="5" 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>
                  <a href="mail:cludfee@gmail.com">cludfee@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Remote | Based in Bengaluru, IN</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h3>Availability</h3>
                  <p>Monday - Friday: 9AM - 6PM PST</p>
                </div>
              </div>
            </div>
            {/* <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-dribbble"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;