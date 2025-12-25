import Seo from "./Seo";


const PersonalDetails = () => {
  return (
    <div className="personal-container" >
      <Seo
        title="Developer CludFee | Full Stack Developer & AI Solutions Expert" 
        description="Learn more about CludFee, a full stack developer specializing in React, Spring Boot, cloud architecture, and AI-powered applications." 
        canonical="https://cludfee.netlify.app/personal-details"
      />

      <h1 className="section-title">About CLudFee</h1>

      {/* Profile & Intro */}
      <div className="profile-grid">
        <div>
          <div className="profile-image-placeholder">
            <i className="fas fa-user"></i>
          </div>

          <div className="info-card">
            <h3>Personal Info</h3>
            <p><strong>Name:</strong> Shekhar Singh</p>
            <p><strong>Location:</strong> Bengaluru, KA</p>
            <p><strong>Email:</strong> cludfee@gmail.com</p>
            <p><strong>Phone:</strong> +91 95088 39640</p>
            <p><strong>Freelance:</strong> Available</p>
          </div>
        </div>

        <div className="profile-details">
          <h2>Full Stack Developer</h2>
          <p>
            With over 2 years of experience in web development, I specialize in creating high-performance, 
            responsive applications that help businesses achieve their goals...
          </p>

          <div className="skills-grid">
            <div>
              <strong>Frontend Development</strong>
              <div className="progress-bar">
                <div style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <strong>Backend Development</strong>
              <div className="progress-bar">
                <div style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <strong>UI/UX Design</strong>
              <div className="progress-bar">
                <div style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <strong>Database Design</strong>
              <div className="progress-bar">
                <div style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>

          <p>
            When I'm not coding, you can find me contributing to open-source projects, exploring new technologies...
          </p>
        </div>
      </div>

      {/* Education & Experience */}
      <div className="info-card">
        <h2 className="center">Education & Experience</h2>
        <div className="two-col-grid">
          <div>
            <h3>Education</h3>
            <div>
              <h4>Bachelor of Computer Science</h4>
              <p className="highlight">IIST Indore, 2020-2024</p>
              <p>Specialized in Web Technologies and Software Engineering</p>
            </div>
            {/* <div>
              <h4>Full Stack Bootcamp</h4>
              <p className="highlight">Tech Academy, 2019</p>
              <p>6-month program covering modern web development</p>
            </div> */}
          </div>

          <div>
            <h3>Experience</h3>
            <div>
              <h4>SOftware Engineer</h4>
              <p className="highlight">Inspiron Lab., 2025-Present</p>
              <p>Working with company as a Software Engineer</p>
            </div>
            <div>
              <h4>Freelance Developer</h4>
              <p className="highlight">2024-Present</p>
              <p>Building custom web solutions for various clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="info-card">
        <h2 className="center">Certifications</h2>
        <div className="cert-grid">
          <div>
            <i className="fab fa-react cert-icon"></i>
            <h4>React Developer Certification</h4>
            <p>Advanced React concepts and best practices</p>
          </div>
          <div>
            <i className="fab fa-java cert-icon"></i>
            <h4>Java FullStack Developer</h4>
            <p>Application Development with Java and React</p>
          </div>
          <div>
            <i className="fas fa-database cert-icon"></i>
            <h4>MySQL Certified Developer</h4>
            <p>Database design and optimization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
