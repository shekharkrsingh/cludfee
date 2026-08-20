import React from 'react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'We start with a conversation to understand your goals, target audience, and project requirements. This helps me create a tailored solution for your needs.'
    },
    {
      number: '02',
      title: 'Wireframes & Design',
      description: 'I create wireframes and design mockups to visualize the final product. We\'ll refine these together until you\'re completely satisfied with the direction.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Once the design is approved, I begin development, building both the frontend and backend components of your application with regular progress updates.'
    },
    {
      number: '04',
      title: 'Testing & Revisions',
      description: 'I thoroughly test the application across devices and browsers, fix any issues, and implement your feedback through revision rounds.'
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'I handle the deployment process and provide post-launch support to ensure everything runs smoothly after going live.'
    }
  ];

  return (
    <section id="process" style={{ position: 'relative', overflow: 'visible' }}>
      <div className="container">
        
        <div className="process-layout">
          {/* Sticky Left Column */}
          <div className="process-sticky-header">
            <h2 className="section-title reveal">How I Work</h2>
            <p className="reveal" style={{ transitionDelay: '0.2s', maxWidth: '400px', color: 'var(--text-muted)' }}>
              A proven, streamlined process designed to turn your ideas into a high-performance reality without any hassle.
            </p>
          </div>

          {/* Scrolling Right Column */}
          <div className="process-steps">
            {steps.map((step, index) => (
              <div key={index} className="process-step-card reveal">
                <div className="step-card-number">{step.number}</div>
                <div className="step-card-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Process;