import React from 'react';
import Footer from './Footer';

const Terms = () => {
  return (
    <div className="container" style={{ padding: '80px 0', maxWidth: '800px', lineHeight: '1.8' }}>
      <h1 className="section-title">Terms & Conditions</h1>
      
      <div style={{ background: 'var(--dark-light)', padding: '40px', borderRadius: '10px' }}>
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        
        <h3>1. Acceptance of Terms</h3>
        <p>By accessing and using John Doe's services, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h3>2. Services Provided</h3>
        <p>John Doe offers full-stack development services including but not limited to:</p>
        <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li>One-page web application development</li>
          <li>UI/UX design services</li>
          <li>Backend development</li>
          <li>Database design and implementation</li>
          <li>Website maintenance and support</li>
        </ul>
        
        <h3>3. Payment Terms</h3>
        <p>Payment is typically structured as follows:</p>
        <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li>50% deposit upon project initiation</li>
          <li>25% upon delivery of initial prototype</li>
          <li>25% upon project completion</li>
        </ul>
        <p>All payments are due within 15 days of invoice receipt.</p>
        
        <h3>4. Intellectual Property</h3>
        <p>Upon full payment, clients receive full ownership of the completed work including source code, design files, and related assets.</p>
        
        <h3>5. Confidentiality</h3>
        <p>Both parties agree not to disclose any confidential information received from the other party during the course of the project.</p>
        
        <h3>6. Limitation of Liability</h3>
        <p>John Doe's total liability for any claim arising out of or relating to these terms or the services shall not exceed the total amount paid by the client for the services.</p>
        
        <h3>7. Revisions and Changes</h3>
        <p>Each project includes 2 rounds of revisions. Additional revisions will be billed at an hourly rate of $75/hour.</p>
        
        <h3>8. Termination</h3>
        <p>Either party may terminate this agreement with written notice if the other party breaches any material term of this agreement.</p>
        
        <h3>9. Governing Law</h3>
        <p>These terms shall be governed by and construed in accordance with the laws of California, USA.</p>
        
        <h3>10. Contact Information</h3>
        <p>For any questions about these Terms & Conditions, please contact:</p>
        <p>Email: john@example.com<br />
        Phone: (555) 123-4567</p>
      </div>
    </div>
  );
};

export default Terms;