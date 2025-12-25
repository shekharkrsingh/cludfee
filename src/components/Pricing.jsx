import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('project'); // 'project' or 'hourly'

  const pricingPlans = [
    {
      title: 'Basic Website',
      price: billingCycle === 'project' ? '$50' : '$10/hour',
      description: 'Perfect for small businesses and personal portfolios',
      features: [
        'Responsive Design',
        'Up to 5 Pages',
        'Contact Form',
        'Basic SEO',
        '1 Round of Revisions',
        '2 Weeks Delivery'
      ],
      recommended: false
    },
    // {
    //   title: 'Business Website',
    //   price: billingCycle === 'project' ? '$3,500' : '$85/hour',
    //   description: 'Ideal for growing businesses needing more functionality',
    //   features: [
    //     'Custom Design',
    //     'Up to 10 Pages',
    //     'CMS Integration',
    //     'Advanced SEO',
    //     '3 Rounds of Revisions',
    //     'Social Media Integration',
    //     '4 Weeks Delivery',
    //     '1 Month Support'
    //   ],
    //   recommended: true
    // },
    // {
    //   title: 'E-Commerce Solution',
    //   price: billingCycle === 'project' ? '$6,500' : '$95/hour',
    //   description: 'Complete online store with payment processing',
    //   features: [
    //     'Full E-Commerce Setup',
    //     'Product Management',
    //     'Payment Gateway Integration',
    //     'Inventory System',
    //     'Order Management',
    //     'Advanced Security',
    //     '6 Weeks Delivery',
    //     '3 Months Support'
    //   ],
    //   recommended: false
    // }
  ];

  const hourlyServices = [
    {
      service: 'Website Maintenance',
      rate: '$50/hour',
      description: 'Regular updates, bug fixes, and content changes'
    },
    {
      service: 'SEO Optimization',
      rate: '$65/hour',
      description: 'Search engine optimization and performance tracking'
    },
    {
      service: 'Custom Feature Development',
      rate: '$85/hour',
      description: 'Adding new features to existing websites'
    },
    {
      service: 'Consultation',
      rate: '$75/hour',
      description: 'Technical advice and project planning'
    }
  ];

  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <h1 className="section-title">Pricing & Packages</h1>
      
      <div style={{ textAlign: 'center', marginBottom: '40px'}}>
        <div className="btn-group" style={{ background: 'var(--dark-light)', padding: '5px', borderRadius: '30px', display: 'inline-flex' }}>
          <button 
            className={`btn ${billingCycle === 'project' ? '' : 'btn-secondary'}`}
            style={{ 
              border: 'none', 
              borderRadius: '30px',
              padding: '10px 20px',
              background: billingCycle === 'project' ? 'var(--primary)' : 'transparent'
            }}
            onClick={() => setBillingCycle('project')}
          >
            Project-Based
          </button>
          <button 
            className={`btn ${billingCycle === 'hourly' ? '' : 'btn-secondary'}`}
            style={{ 
              border: 'none', 
              borderRadius: '30px',
              padding: '10px 20px',
              background: billingCycle === 'hourly' ? 'var(--primary)' : 'transparent'
            }}
            onClick={() => setBillingCycle('hourly')}
          >
            Hourly Rate
          </button>
        </div>
      </div>

      {billingCycle === 'project' ? (
        <div className="services-grid">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className="service-card" 
              style={{ 
                position: 'relative',
                maxWidth:'20em',
                border: plan.recommended ? '2px solid var(--primary)' : '2px solid transparent',
                transform: plan.recommended ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              {plan.recommended && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--primary)',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  MOST POPULAR
                </div>
              )}
              <h3>{plan.title}</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', margin: '20px 0' }}>
                {plan.price}
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>{plan.description}</p>
              <ul style={{ textAlign: 'left', marginBottom: '30px', listStyle: 'none' }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
                    <i className="fas fa-check" style={{ color: 'var(--primary)', position: 'absolute', left: '0' }}></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn" style={{ width: '100%', textAlign: 'center' }}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ background: 'var(--dark-light)', padding: '40px', borderRadius: '10px' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>Hourly Services</h3>
          <div className="services-grid">
            {hourlyServices.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.service}</h3>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--primary)', margin: '15px 0' }}>
                  {service.rate}
                </div>
                <p style={{ color: 'var(--text-muted)' }}>{service.description}</p>
                <a href="#contact" className="btn" style={{ marginTop: '20px' }}>
                  Hire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ background: 'var(--dark-light)', padding: '40px', borderRadius: '10px', marginTop: '50px' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>What's Included in Every Project</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '15px' }}>
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h4>Responsive Design</h4>
            <p>Your website will look great on all devices</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '15px' }}>
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <h4>Fast Performance</h4>
            <p>Optimized for speed and user experience</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '15px' }}>
              <i className="fas fa-shield-alt"></i>
            </div>
            <h4>Security</h4>
            <p>Built with security best practices</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '15px' }}>
              <i className="fas fa-life-ring"></i>
            </div>
            <h4>Support</h4>
            <p>Ongoing support options available</p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h3>Need a custom solution?</h3>
        <p style={{ marginBottom: '30px' }}>Contact me for a personalized quote based on your specific requirements</p>
        <a href="#contact" className="btn">Get a Custom Quote</a>
      </div>
    </div>
  );
};

export default Pricing;