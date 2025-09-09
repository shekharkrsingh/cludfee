import React from 'react';

const Process = () => {
  const steps = [
    {
      number: 1,
      title: 'Discovery Call',
      description: 'We start with a conversation to understand your goals, target audience, and project requirements. This helps me create a tailored solution for your needs.'
    },
    {
      number: 2,
      title: 'Wireframes & Design',
      description: 'I create wireframes and design mockups to visualize the final product. We\'ll refine these together until you\'re completely satisfied with the direction.'
    },
    {
      number: 3,
      title: 'Development',
      description: 'Once the design is approved, I begin development, building both the frontend and backend components of your application with regular progress updates.'
    },
    {
      number: 4,
      title: 'Testing & Revisions',
      description: 'I thoroughly test the application across devices and browsers, fix any issues, and implement your feedback through revision rounds.'
    },
    {
      number: 5,
      title: 'Launch & Support',
      description: 'I handle the deployment process and provide post-launch support to ensure everything runs smoothly after going live.'
    }
  ];

  return (
    <section id="process">
      <div className="container">
        <h2 className="section-title">How I Work</h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;