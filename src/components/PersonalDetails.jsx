import React from 'react';

const PersonalDetails = () => {
  return (
    <div className="container" style={{ padding: '80px 0', maxWidth: '900px' }}>
      <h1 className="section-title">About John Doe</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px', marginBottom: '50px' }}>
        <div>
          <div className="profile-image-placeholder" style={{ marginBottom: '30px' }}>
            <i className="fas fa-user"></i>
          </div>
          
          <div style={{ background: 'var(--dark-light)', padding: '20px', borderRadius: '10px' }}>
            <h3>Personal Info</h3>
            <div style={{ marginBottom: '15px' }}>
              <strong>Name:</strong> John Doe
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Location:</strong> San Francisco, CA
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Email:</strong> john@example.com
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Phone:</strong> (555) 123-4567
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Freelance:</strong> Available
            </div>
          </div>
        </div>
        
        <div>
          <h2>Full Stack Developer</h2>
          <p style={{ marginBottom: '20px' }}>
            With over 5 years of experience in web development, I specialize in creating high-performance, 
            responsive applications that help businesses achieve their goals. My approach combines technical 
            expertise with a deep understanding of user experience to create solutions that not only look great 
            but also deliver real results.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
            <div>
              <strong>Frontend Development</strong>
              <div style={{ height: '10px', background: 'var(--dark)', borderRadius: '5px', marginTop: '5px' }}>
                <div style={{ width: '95%', height: '100%', background: 'var(--primary)', borderRadius: '5px' }}></div>
              </div>
            </div>
            <div>
              <strong>Backend Development</strong>
              <div style={{ height: '10px', background: 'var(--dark)', borderRadius: '5px', marginTop: '5px' }}>
                <div style={{ width: '90%', height: '100%', background: 'var(--primary)', borderRadius: '5px' }}></div>
              </div>
            </div>
            <div>
              <strong>UI/UX Design</strong>
              <div style={{ height: '10px', background: 'var(--dark)', borderRadius: '5px', marginTop: '5px' }}>
                <div style={{ width: '85%', height: '100%', background: 'var(--primary)', borderRadius: '5px' }}></div>
              </div>
            </div>
            <div>
              <strong>Database Design</strong>
              <div style={{ height: '10px', background: 'var(--dark)', borderRadius: '5px', marginTop: '5px' }}>
                <div style={{ width: '88%', height: '100%', background: 'var(--primary)', borderRadius: '5px' }}></div>
              </div>
            </div>
          </div>
          
          <p>
            When I'm not coding, you can find me contributing to open-source projects, exploring new technologies, 
            or sharing my knowledge through tech blogs and tutorials. I'm passionate about creating digital 
            experiences that make a difference and helping businesses thrive in the digital world.
          </p>
        </div>
      </div>
      
      <div style={{ background: 'var(--dark-light)', padding: '40px', borderRadius: '10px', marginBottom: '50px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Education & Experience</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div>
            <h3>Education</h3>
            <div style={{ marginBottom: '20px' }}>
              <h4>Bachelor of Computer Science</h4>
              <p style={{ color: 'var(--primary)', marginBottom: '5px' }}>Stanford University, 2015-2019</p>
              <p>Specialized in Web Technologies and Software Engineering</p>
            </div>
            <div>
              <h4>Full Stack Web Development Bootcamp</h4>
              <p style={{ color: 'var(--primary)', marginBottom: '5px' }}>Tech Academy, 2019</p>
              <p>Intensive 6-month program covering modern web development</p>
            </div>
          </div>
          
          <div>
            <h3>Experience</h3>
            <div style={{ marginBottom: '20px' }}>
              <h4>Senior Full Stack Developer</h4>
              <p style={{ color: 'var(--primary)', marginBottom: '5px' }}>Tech Solutions Inc., 2020-Present</p>
              <p>Leading development teams and architecting web applications for enterprise clients</p>
            </div>
            <div>
              <h4>Freelance Web Developer</h4>
              <p style={{ color: 'var(--primary)', marginBottom: '5px' }}>2019-Present</p>
              <p>Working with various clients to build custom web solutions and applications</p>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ background: 'var(--dark-light)', padding: '40px', borderRadius: '10px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Certifications</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '15px' }}>
              <i className="fab fa-react"></i>
            </div>
            <h4>React Developer Certification</h4>
            <p>Advanced React concepts and best practices</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '15px' }}>
              <i className="fab fa-aws"></i>
            </div>
            <h4>AWS Certified Developer</h4>
            <p>Cloud infrastructure and deployment</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '15px' }}>
              <i className="fas fa-database"></i>
            </div>
            <h4>MongoDB Certified Developer</h4>
            <p>Database design and optimization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;