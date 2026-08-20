import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ParticlesBackground from './ParticlesBackground';
import Seo from './Seo';

const Terms = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [accepted, setAccepted] = useState(false);

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'definitions', title: 'Definitions' },
    { id: 'services', title: 'Services' },
    { id: 'user-obligations', title: 'User Obligations' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'payment-terms', title: 'Payment Terms' },
    { id: 'confidentiality', title: 'Confidentiality' },
    { id: 'limitation-liability', title: 'Limitation of Liability' },
    { id: 'termination', title: 'Termination' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'contact', title: 'Contact Information' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <Seo 
        title="Terms and Conditions | CludFee"
        description="Read the terms and conditions for using CludFee's services."
        canonical="https://cludfee.netlify.app/terms"
      />
      <ParticlesBackground />
      <div className="container" style={{ padding: '80px 0', maxWidth: '1200px', position: 'relative', zIndex: 10 }}>
        <h1 className="section-title">Terms & Conditions</h1>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '40px' }}>
          Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div style={{ 
          background: 'linear-gradient(135deg, var(--primary), var(--secondary))', 
          padding: '20px', 
          borderRadius: '10px', 
          marginBottom: '40px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h3><i className="fas fa-exclamation-triangle" style={{ marginRight: '10px' }}></i>Important Legal Notice</h3>
          <p>Please read these Terms and Conditions carefully before using our services. By accessing or using our services, you agree to be bound by these Terms.</p>
        </div>

        <div className="legal-layout">
          {/* Table of Contents */}
          <div style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}>
            <div style={{ background: 'var(--dark-light)', padding: '20px', borderRadius: '10px' }}>
              <h3 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--primary)' }}>Contents</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {sections.map((section) => (
                  <li key={section.id} style={{ marginBottom: '10px' }}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: activeSection === section.id ? 'var(--primary)' : 'var(--text)',
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        transition: 'var(--transition)',
                        fontWeight: activeSection === section.id ? '600' : '400'
                      }}
                      onMouseOver={(e) => e.target.style.background = 'rgba(110, 68, 255, 0.1)'}
                      onMouseOut={(e) => e.target.style.background = 'none'}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Actions */}
            <div style={{ background: 'var(--dark-light)', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
              <h4 style={{ marginBottom: '15px' }}>Quick Actions</h4>
              <Link to="/policy" className="btn" style={{ width: '100%', marginBottom: '10px', textAlign: 'center' }}>
                View Privacy Policy
              </Link>
              <a href="#contact" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
                Contact About Terms
              </a>
            </div>

            {/* Acceptance Toggle */}
            <div style={{ background: 'var(--dark-light)', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
              <h4 style={{ marginBottom: '15px' }}>Terms Acceptance</h4>
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={accepted} 
                  onChange={() => setAccepted(!accepted)}
                  style={{ marginRight: '10px' }}
                />
                I have read and accept the Terms & Conditions
              </label>
              {accepted && (
                <div style={{ 
                  background: 'rgba(76, 175, 80, 0.2)', 
                  color: '#4CAF50', 
                  padding: '10px', 
                  borderRadius: '5px', 
                  marginTop: '10px',
                  fontSize: '0.9rem'
                }}>
                  <i className="fas fa-check-circle" style={{ marginRight: '5px' }}></i>
                  Thank you for accepting our Terms & Conditions
                </div>
              )}
            </div>
          </div>

          {/* Terms Content */}
          <div>
            <div id="introduction" style={{ scrollMarginTop: '120px' }}>
              <h2>1. Introduction</h2>
              <div style={{ background: 'var(--dark-light)', padding: '30px', borderRadius: '10px', marginBottom: '40px' }}>
                <p>Welcome to John Doe's Terms and Conditions. These terms govern your use of our services, website, and any related applications (collectively, the "Services").</p>
                <p>By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of these Terms, you may not access our Services.</p>
              
              <div style={{ background: 'rgba(110, 68, 255, 0.1)', padding: '15px', borderRadius: '8px', margin: '15px 0' }}>
                <h4 style={{ color: 'var(--primary)' }}><i className="fas fa-info-circle" style={{ marginRight: '10px' }}></i>Note</h4>
                <p>These Terms constitute a legally binding agreement between you and John Doe regarding your use of the Services.</p>
              </div>
            </div>
          </div>

          <div id="definitions" style={{ scrollMarginTop: '120px' }}>
            <h2>2. Definitions</h2>
            <div style={{ background: 'var(--dark-light)', padding: '30px', borderRadius: '10px', marginBottom: '40px' }}>
              <p>For the purposes of these Terms and Conditions:</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', margin: '20px 0' }}>
                <div style={{ padding: '15px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '8px' }}>
                  <h4>"Services"</h4>
                  <p>Refers to the web development, design, and related services provided by John Doe.</p>
                </div>
                
                <div style={{ padding: '15px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '8px' }}>
                  <h4>"Client"</h4>
                  <p>Refers to the individual or entity using our Services.</p>
                </div>
                
                <div style={{ padding: '15px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '8px' }}>
                  <h4>"Content"</h4>
                  <p>Refers to all text, images, code, and other materials provided by the Client.</p>
                </div>
                
                <div style={{ padding: '15px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '8px' }}>
                  <h4>"Deliverables"</h4>
                  <p>Refers to the work product created by John Doe for the Client.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="services" style={{ scrollMarginTop: '120px' }}>
            <h2>3. Services</h2>
            <div style={{ background: 'var(--dark-light)', padding: '30px', borderRadius: '10px', marginBottom: '40px' }}>
              <p>John Doe provides the following services:</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', margin: '20px 0' }}>
                <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '15px' }}>
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <h4>Web Development</h4>
                  <p>Custom website and application development</p>
                </div>
                
                <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '15px' }}>
                    <i className="fas fa-paint-brush"></i>
                  </div>
                  <h4>UI/UX Design</h4>
                  <p>User interface and experience design</p>
                </div>
                
                <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '15px' }}>
                    <i className="fas fa-server"></i>
                  </div>
                  <h4>Backend Development</h4>
                  <p>Server-side programming and database design</p>
                </div>
                
                <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '15px' }}>
                    <i className="fas fa-tools"></i>
                  </div>
                  <h4>Maintenance</h4>
                  <p>Ongoing support and updates</p>
                </div>
              </div>

              <p>Specific services to be provided will be detailed in a separate agreement or statement of work.</p>
            </div>
          </div>

          <div id="user-obligations" style={{ scrollMarginTop: '120px' }}>
            <h2>4. User Obligations</h2>
            <div style={{ background: 'var(--dark-light)', padding: '30px', borderRadius: '10px', marginBottom: '40px' }}>
              <p>As a user of our Services, you agree to:</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', margin: '20px 0' }}>
                <div style={{ padding: '15px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '8px' }}>
                  <h4><i className="fas fa-check-circle" style={{ marginRight: '10px', color: 'var(--primary)' }}></i>Provide Accurate Information</h4>
                  <p>Supply complete and accurate information for your project</p>
                </div>
                
                <div style={{ padding: '15px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '8px' }}>
                  <h4><i className="fas fa-clock" style={{ marginRight: '10px', color: 'var(--primary)' }}></i>Timely Responses</h4>
                  <p>Respond to requests for information in a timely manner</p>
                </div>
                
                <div style={{ padding: '15px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '8px' }}>
                  <h4><i className="fas fa-shield-alt" style={{ marginRight: '10px', color: 'var(--primary)' }}></i>Legal Content</h4>
                  <p>Ensure all materials provided do not infringe on third-party rights</p>
                </div>
                
                <div style={{ padding: '15px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '8px' }}>
                  <h4><i className="fas fa-credit-card" style={{ marginRight: '10px', color: 'var(--primary)' }}></i>Payment Obligations</h4>
                  <p>Make payments according to the agreed schedule</p>
                </div>
              </div>

              <div style={{ background: 'rgba(255, 152, 0, 0.1)', padding: '15px', borderRadius: '8px', margin: '15px 0', borderLeft: '4px solid #FF9800' }}>
                <h4 style={{ color: '#FF9800' }}><i className="fas fa-exclamation-triangle" style={{ marginRight: '10px' }}></i>Prohibited Activities</h4>
                <p>You may not use our Services for any illegal or unauthorized purpose, including but not limited to:</p>
                <ul>
                  <li>Violating intellectual property rights</li>
                  <li>Distributing malware or harmful code</li>
                  <li>Engaging in fraudulent activities</li>
                  <li>Spamming or phishing</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="intellectual-property" style={{ scrollMarginTop: '120px' }}>
            <h2>5. Intellectual Property</h2>
            <div style={{ background: 'var(--dark-light)', padding: '30px', borderRadius: '10px', marginBottom: '40px' }}>
              <h3>Client Materials</h3>
              <p>The Client retains ownership of all materials, content, and intellectual property provided to John Doe for use in the project.</p>
              
              <h3>Deliverables</h3>
              <p>Upon full payment, John Doe assigns all rights, title, and interest in the Deliverables to the Client, except for:</p>
              <ul>
                <li>Pre-existing works owned by John Doe or third parties</li>
                <li>Open-source components used in the project</li>
                <li>John Doe's proprietary tools, methods, and processes</li>
              </ul>
              
              <h3>License to John Doe</h3>
              <p>The Client grants John Doe a limited license to use the Client's name and project details in portfolios and marketing materials, unless otherwise specified in writing.</p>
              
              <div style={{ background: 'rgba(110, 68, 255, 0.1)', padding: '15px', borderRadius: '8px', margin: '15px 0' }}>
                <h4 style={{ color: 'var(--primary)' }}><i className="fas fa-lightbulb" style={{ marginRight: '10px' }}></i>IP Protection</h4>
                <p>Both parties agree to respect and protect each other's intellectual property rights and to not disclose proprietary information without permission.</p>
              </div>
            </div>
          </div>

          <div id="payment-terms" style={{ scrollMarginTop: '120px' }}>
            <h2>6. Payment Terms</h2>
            <div style={{ background: 'var(--dark-light)', padding: '30px', borderRadius: '10px', marginBottom: '40px' }}>
              <h3>Payment Structure</h3>
              <p>Unless otherwise agreed in writing, payments are structured as follows:</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', margin: '20px 0' }}>
                <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2rem', color: '#4CAF50', marginBottom: '15px' }}>
                    <i className="fas fa-money-bill-wave"></i>
                  </div>
                  <h4>50% Deposit</h4>
                  <p>Due upon project initiation</p>
                </div>
                
                <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2rem', color: '#4CAF50', marginBottom: '15px' }}>
                    <i className="fas fa-money-check"></i>
                  </div>
                  <h4>25% Progress</h4>
                  <p>Due after prototype approval</p>
                </div>
                
                <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2rem', color: '#4CAF50', marginBottom: '15px' }}>
                    <i className="fas fa-receipt"></i>
                  </div>
                  <h4>25% Completion</h4>
                  <p>Due upon project delivery</p>
                </div>
              </div>

              <h3>Late Payments</h3>
              <p>Payments are due within 15 days of invoice date. Late payments may be subject to:</p>
              <ul>
                <li>A late fee of 1.5% per month on the outstanding balance</li>
                <li>Suspension of services until payment is received</li>
                <li>Withholding of deliverables until payment is received</li>
              </ul>
              
              <h3>Taxes</h3>
              <p>The Client is responsible for all sales taxes, use taxes, value-added taxes, and similar charges unless otherwise specified.</p>
            </div>
          </div>

          <div id="confidentiality" style={{ scrollMarginTop: '120px' }}>
            <h2>7. Confidentiality</h2>
            <div style={{ background: 'var(--dark-light)', padding: '30px', borderRadius: '10px', marginBottom: '40px' }}>
              <p>Both parties agree to maintain the confidentiality of any proprietary or confidential information received from the other party.</p>
              
              <h3>Confidential Information Includes:</h3>
              <ul>
                <li>Business plans and strategies</li>
                <li>Technical information and trade secrets</li>
                <li>Customer lists and marketing plans</li>
                <li>Financial information</li>
                <li>Any information marked as confidential</li>
              </ul>
              
              <h3>Exceptions:</h3>
              <p>Confidentiality obligations do not apply to information that:</p>
              <ul>
                <li>Was already known to the receiving party</li>
                <li>Is or becomes publicly available through no fault of the receiving party</li>
                <li>Is independently developed by the receiving party</li>
                <li>Is required to be disclosed by law</li>
              </ul>
              
              <div style={{ background: 'rgba(110, 68, 255, 0.1)', padding: '15px', borderRadius: '8px', margin: '15px 0' }}>
                <h4 style={{ color: 'var(--primary)' }}><i className="fas fa-lock" style={{ marginRight: '10px' }}></i>Duration</h4>
                <p>Confidentiality obligations survive termination of these Terms and remain in effect for 3 years after disclosure.</p>
              </div>
            </div>
          </div>

          <div id="limitation-liability" style={{ scrollMarginTop: '120px' }}>
            <h2>8. Limitation of Liability</h2>
            <div style={{ background: 'var(--dark-light)', padding: '30px', borderRadius: '10px', marginBottom: '40px' }}>
              <p>To the fullest extent permitted by law, John Doe's total liability for any claims arising out of or relating to these Terms or the Services shall not exceed the total amount paid by the Client for the Services in the 6 months preceding the event giving rise to the claim.</p>
              
              <div style={{ background: 'rgba(244, 67, 54, 0.1)', padding: '15px', borderRadius: '8px', margin: '15px 0', borderLeft: '4px solid #F44336' }}>
                <h4 style={{ color: '#F44336' }}><i className="fas fa-exclamation-circle" style={{ marginRight: '10px' }}></i>Exclusion of Damages</h4>
                <p>In no event shall John Doe be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses.</p>
              </div>
              
              <h3>Exceptions</h3>
              <p>These limitations do not apply to:</p>
              <ul>
                <li>Liability for death or personal injury caused by negligence</li>
                <li>Liability for fraud or fraudulent misrepresentation</li>
                <li>Any other liability that cannot be excluded or limited under applicable law</li>
              </ul>
            </div>
          </div>

          <div id="termination" style={{ scrollMarginTop: '120px' }}>
            <h2>9. Termination</h2>
            <div style={{ background: 'var(--dark-light)', padding: '30px', borderRadius: '10px', marginBottom: '40px' }}>
              <h3>Termination for Cause</h3>
              <p>Either party may terminate these Terms for cause upon written notice if the other party:</p>
              <ul>
                <li>Materially breaches these Terms and fails to cure the breach within 30 days of written notice</li>
                <li>Becomes insolvent or declares bankruptcy</li>
                <li>Ceases business operations</li>
              </ul>
              
              <h3>Termination for Convenience</h3>
              <p>The Client may terminate these Terms for convenience at any time by providing written notice. In such cases:</p>
              <ul>
                <li>The Client will pay for all services rendered up to the termination date</li>
                <li>The Client will pay for any work in progress at the time of termination</li>
                <li>The Client may be subject to an early termination fee if specified in the agreement</li>
              </ul>
              
              <h3>Effects of Termination</h3>
              <p>Upon termination:</p>
              <ul>
                <li>All rights and licenses granted will immediately cease</li>
                <li>The Client will pay all outstanding fees</li>
                <li>Each party will return or destroy the other party's confidential information</li>
              </ul>
            </div>
          </div>

          <div id="governing-law" style={{ scrollMarginTop: '120px' }}>
            <h2>10. Governing Law</h2>
            <div style={{ background: 'var(--dark-light)', padding: '30px', borderRadius: '10px', marginBottom: '40px' }}>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.</p>
              
              <h3>Dispute Resolution</h3>
              <p>Any disputes arising under these Terms shall be resolved through the following process:</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', margin: '20px 0' }}>
                <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '15px' }}>
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h4>Negotiation</h4>
                  <p>Parties will attempt to resolve the dispute through good faith negotiation</p>
                </div>
                
                <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '15px' }}>
                    <i className="fas fa-balance-scale"></i>
                  </div>
                  <h4>Mediation</h4>
                  <p>If negotiation fails, parties will attempt mediation with a neutral third party</p>
                </div>
                
                <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '15px' }}>
                    <i className="fas fa-gavel"></i>
                  </div>
                  <h4>Litigation</h4>
                  <p>If mediation fails, parties may pursue litigation in San Francisco County courts</p>
                </div>
              </div>
            </div>
          </div>

          <div id="changes" style={{ scrollMarginTop: '120px' }}>
            <h2>11. Changes to Terms</h2>
            <div style={{ background: 'var(--dark-light)', padding: '30px', borderRadius: '10px', marginBottom: '40px' }}>
              <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>
              
              <p>What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised terms.</p>
              
              <div style={{ background: 'rgba(110, 68, 255, 0.1)', padding: '15px', borderRadius: '8px', margin: '15px 0' }}>
                <h4 style={{ color: 'var(--primary)' }}><i className="fas fa-bell" style={{ marginRight: '10px' }}></i>Notification</h4>
                <p>We will notify you of changes to these Terms by posting the new Terms on this page and updating the "Last Updated" date at the top of these Terms.</p>
              </div>
            </div>
          </div>

          <div id="contact" style={{ scrollMarginTop: '120px' }}>
            <h2>12. Contact Information</h2>
            <div style={{ background: 'var(--dark-light)', padding: '30px', borderRadius: '10px', marginBottom: '40px' }}>
              <p>If you have any questions about these Terms, please contact us:</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', margin: '20px 0' }}>
                <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '15px' }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h4>Email</h4>
                  <p>legal@johndoe.com</p>
                </div>
                
                <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '15px' }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h4>Address</h4>
                  <p>123 Developer Street<br />San Francisco, CA 94102</p>
                </div>
                
                <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(110, 68, 255, 0.1)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '15px' }}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <h4>Phone</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>

              <p>We will respond to all legitimate inquiries within 5 business days.</p>
            </div>
          </div>

          {/* Terms Summary */}
          <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', padding: '30px', borderRadius: '10px', color: 'white', marginTop: '40px' }}>
            <h3 style={{ color: 'white', marginBottom: '15px' }}><i className="fas fa-file-contract" style={{ marginRight: '10px' }}></i>Terms Summary</h3>
            <p>These Terms & Conditions govern your use of John Doe's services. By using our services, you agree to these terms, including our payment structure, intellectual property rights, and limitation of liability. We're committed to providing quality services while protecting both our rights and yours.</p>
            <p style={{ fontSize: '0.9rem', opacity: '0.9', marginTop: '15px' }}>This summary is provided for your convenience but is not a substitute for reading the full Terms & Conditions.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Terms;