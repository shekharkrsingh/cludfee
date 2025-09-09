import React from 'react';

const Expectations = () => {
  const expectations = [
    {
      icon: 'fas fa-comments',
      title: 'Clear Communication',
      description: 'I keep you updated at every step of the process with regular progress reports and am always available to answer your questions.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Timely Delivery',
      description: 'Your time is respected. I set realistic deadlines and meet them, ensuring your project is delivered on schedule.'
    },
    {
      icon: 'fas fa-code',
      title: 'Clean, Scalable Code',
      description: 'I write maintainable, well-documented code that follows best practices and is built for long-term use.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile-First Design',
      description: 'Your application will look great and function perfectly on all devices, from smartphones to desktops.'
    },
    {
      icon: 'fas fa-hands-helping',
      title: 'End-to-End Support',
      description: 'From planning to post-launch, I provide comprehensive support to ensure your project\'s success.'
    },
    {
      icon: 'fas fa-tachometer-alt',
      title: 'SEO & Performance',
      description: 'Your application will be optimized for speed and visibility, helping you reach your target audience.'
    }
  ];

  return (
    <section id="expectations">
      <div className="container">
        <h2 className="section-title">What You Can Expect Working With Me</h2>
        <div className="expectations-grid">
          {expectations.map((expectation, index) => (
            <div key={index} className="expectation-card">
              <div className="expectation-icon">
                <i className={expectation.icon}></i>
              </div>
              <h3>{expectation.title}</h3>
              <p>{expectation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expectations;