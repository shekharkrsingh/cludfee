import React, {useState} from 'react';
import Seo from './Seo';

const Policy = () => {
    const [activeSection, setActiveSection] = useState('introduction');

    const sections = [
        {
            id: 'introduction',
            title: 'Introduction'
        }, {
            id: 'information-collected',
            title: 'Information Collected'
        }, {
            id: 'how-we-use',
            title: 'How We Use Information'
        }, {
            id: 'data-protection',
            title: 'Data Protection'
        }, {
            id: 'cookies',
            title: 'Cookies'
        }, {
            id: 'third-party',
            title: 'Third-Party Services'
        }, {
            id: 'user-rights',
            title: 'Your Rights'
        }, {
            id: 'policy-changes',
            title: 'Policy Changes'
        }, {
            id: 'contact',
            title: 'Contact Us'
        }
    ];

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div
            className="container"
            style={{
                padding: '80px 0',
                maxWidth: '1200px'
            }}>
            <Seo
                title="Privacy Policy | CludFee" 
                description="CludFee values your privacy. Read our Privacy Policy to understand how we collect, use, and protect your personal information" 
                canonical="https://cludfee.netlify.app/privacy-policy"
                />

            <h1 className="section-title">Privacy Policy</h1>
            <p
                style={{
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                    marginBottom: '40px'
                }}>
                Last Updated: {
                    new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })
                }
            </p>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 3fr',
                    gap: '40px'
                }}>
                {/* Table of Contents */}
                <div
                    className='sidebar'
                    style={{
                        position: 'sticky',
                        top: '100px',
                        alignSelf: 'start'
                    }}>
                    <div
                        style={{
                            background: 'var(--dark-light)',
                            padding: '20px',
                            borderRadius: '10px'
                        }}>
                        <h3
                            style={{
                                marginBottom: '20px',
                                paddingBottom: '10px',
                                borderBottom: '2px solid var(--primary)'
                            }}>Contents</h3>
                        <ul
                            style={{
                                listStyle: 'none',
                                padding: 0
                            }}>
                            {
                                sections.map((section) => (
                                    <li
                                        key={section.id}
                                        style={{
                                            marginBottom: '10px'
                                        }}>
                                        <button
                                            onClick={() => scrollToSection(section.id)}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: activeSection === section.id
                                                    ? 'var(--primary)'
                                                    : 'var(--text)',
                                                cursor: 'pointer',
                                                textAlign: 'left',
                                                width: '100%',
                                                padding: '8px 10px',
                                                borderRadius: '5px',
                                                transition: 'var(--transition)',
                                                fontWeight: activeSection === section.id
                                                    ? '600'
                                                    : '400'
                                            }}
                                            onMouseOver={(e) => e.target.style.background = 'rgba(110, 68, 255, 0.1)'}
                                            onMouseOut={(e) => e.target.style.background = 'none'}>
                                            {section.title}
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Quick Actions */}
                    {/* <div style={{ background: 'var(--dark-light)', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
            <h4 style={{ marginBottom: '15px' }}>Quick Actions</h4>
            <Link to="/terms" className="btn" style={{ width: '100%', marginBottom: '10px', textAlign: 'center' }}>
              View Terms
            </Link>
            <a href="#contact" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
              Contact About Data
            </a>
          </div> */
                    }
                </div>

                {/* Policy Content */}
                <div>
                    <div
                        id="introduction"
                        style={{
                            scrollMarginTop: '120px'
                        }}>
                        <h2>1. Introduction</h2>
                        <div
                            style={{
                                background: 'var(--dark-light)',
                                padding: '30px',
                                borderRadius: '10px',
                                marginBottom: '40px'
                            }}>
                            <p>Welcome to CludFee's Privacy Policy. This policy describes how we collect,
                                use, and share your personal information when you use our services, visit our
                                website, or interact with us.</p>
                            <p>By using our services, you agree to the collection and use of information in
                                accordance with this policy. We are committed to protecting your privacy and
                                ensuring that your personal information is handled in a safe and responsible
                                manner.</p>
                        </div>
                    </div>

                    <div
                        id="information-collected"
                        style={{
                            scrollMarginTop: '120px'
                        }}>
                        <h2>2. Information We Collect</h2>
                        <div
                            style={{
                                background: 'var(--dark-light)',
                                padding: '30px',
                                borderRadius: '10px',
                                marginBottom: '40px'
                            }}>
                            <h3>Personal Information</h3>
                            <p>We may collect the following types of personal information:</p>
                            <ul>
                                <li>
                                    <strong>Contact Information:</strong>
                                    Name, email address, phone number, and physical address</li>
                                <li>
                                    <strong>Account Information:</strong>
                                    Username, password, and other authentication details</li>
                                <li>
                                    <strong>Payment Information:</strong>
                                    Billing address, credit card details, and transaction history</li>
                                <li>
                                    <strong>Communication Data:</strong>
                                    Messages, emails, and other communications you send to us</li>
                            </ul>

                            <h3>Automatically Collected Information</h3>
                            <p>When you visit our website, we automatically collect certain information
                                about your device and usage:</p>
                            <ul>
                                <li>
                                    <strong>Device Information:</strong>
                                    IP address, browser type, operating system, and device identifiers</li>
                                <li>
                                    <strong>Usage Data:</strong>
                                    Pages visited, time spent on pages, clickstream data, and referring URLs</li>
                                <li>
                                    <strong>Location Data:</strong>
                                    General geographic location based on IP address</li>
                            </ul>

                            <h3>Information from Third Parties</h3>
                            <p>We may receive information about you from third-party services, such as:</p>
                            <ul>
                                <li>Social media platforms when you interact with our social media presence</li>
                                <li>Analytics providers that help us understand how our services are used</li>
                                <li>Payment processors that handle transactions on our behalf</li>
                            </ul>
                        </div>
                    </div>

                    <div
                        id="how-we-use"
                        style={{
                            scrollMarginTop: '120px'
                        }}>
                        <h2>3. How We Use Your Information</h2>
                        <div
                            style={{
                                background: 'var(--dark-light)',
                                padding: '30px',
                                borderRadius: '10px',
                                marginBottom: '40px'
                            }}>
                            <p>We use the information we collect for the following purposes:</p>

                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                    gap: '20px',
                                    margin: '20px 0'
                                }}>
                                <div
                                    style={{
                                        textAlign: 'center',
                                        padding: '20px',
                                        background: 'rgba(110, 68, 255, 0.1)',
                                        borderRadius: '10px'
                                    }}>
                                    <div
                                        style={{
                                            fontSize: '2rem',
                                            color: 'var(--primary)',
                                            marginBottom: '15px'
                                        }}>
                                        <i className="fas fa-cogs"></i>
                                    </div>
                                    <h4>Service Provision</h4>
                                    <p>To provide, maintain, and improve our services</p>
                                </div>

                                <div
                                    style={{
                                        textAlign: 'center',
                                        padding: '20px',
                                        background: 'rgba(110, 68, 255, 0.1)',
                                        borderRadius: '10px'
                                    }}>
                                    <div
                                        style={{
                                            fontSize: '2rem',
                                            color: 'var(--primary)',
                                            marginBottom: '15px'
                                        }}>
                                        <i className="fas fa-comments"></i>
                                    </div>
                                    <h4>Communication</h4>
                                    <p>To respond to your inquiries and provide customer support</p>
                                </div>

                                <div
                                    style={{
                                        textAlign: 'center',
                                        padding: '20px',
                                        background: 'rgba(110, 68, 255, 0.1)',
                                        borderRadius: '10px'
                                    }}>
                                    <div
                                        style={{
                                            fontSize: '2rem',
                                            color: 'var(--primary)',
                                            marginBottom: '15px'
                                        }}>
                                        <i className="fas fa-chart-line"></i>
                                    </div>
                                    <h4>Analytics</h4>
                                    <p>To analyze trends and usage of our services</p>
                                </div>
                            </div>

                            <p>We may also use your information for marketing purposes, but only with your
                                explicit consent. You can opt out of marketing communications at any time.</p>
                        </div>
                    </div>

                    <div
                        id="data-protection"
                        style={{
                            scrollMarginTop: '120px'
                        }}>
                        <h2>4. Data Protection & Security</h2>
                        <div
                            style={{
                                background: 'var(--dark-light)',
                                padding: '30px',
                                borderRadius: '10px',
                                marginBottom: '40px'
                            }}>
                            <p>We implement appropriate technical and organizational measures to protect
                                your personal information against unauthorized access, alteration, disclosure,
                                or destruction.</p>

                            <h3>Security Measures</h3>
                            <ul>
                                <li>Encryption of sensitive data in transit and at rest</li>
                                <li>Regular security assessments and vulnerability testing</li>
                                <li>Access controls limiting who can view and use your information</li>
                                <li>Regular staff training on data protection practices</li>
                            </ul>

                            <h3>Data Retention</h3>
                            <p>We retain your personal information only for as long as necessary to fulfill
                                the purposes outlined in this policy, unless a longer retention period is
                                required or permitted by law.</p>

                            <div
                                style={{
                                    background: 'rgba(110, 68, 255, 0.1)',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    margin: '15px 0'
                                }}>
                                <h4
                                    style={{
                                        color: 'var(--primary)'
                                    }}>
                                    <i
                                        className="fas fa-shield-alt"
                                        style={{
                                            marginRight: '10px'
                                        }}></i>Security Commitment</h4>
                                <p>We are committed to protecting your data and continuously work to improve our
                                    security practices. However, no method of transmission over the Internet or
                                    electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        id="cookies"
                        style={{
                            scrollMarginTop: '120px'
                        }}>
                        <h2>5. Cookies and Tracking Technologies</h2>
                        <div
                            style={{
                                background: 'var(--dark-light)',
                                padding: '30px',
                                borderRadius: '10px',
                                marginBottom: '40px'
                            }}>
                            <p>We use cookies and similar tracking technologies to track activity on our
                                website and hold certain information.</p>

                            <h3>Types of Cookies We Use</h3>
                            <ul>
                                <li>
                                    <strong>Essential Cookies:</strong>
                                    Required for the operation of our website</li>
                                <li>
                                    <strong>Analytical/Performance Cookies:</strong>
                                    Allow us to recognize and count visitors</li>
                                <li>
                                    <strong>Functionality Cookies:</strong>
                                    Enable us to personalize content</li>
                                <li>
                                    <strong>Targeting Cookies:</strong>
                                    Record your visit and pages you have visited</li>
                            </ul>

                            <h3>Managing Cookies</h3>
                            <p>You can set your browser to refuse all or some browser cookies, or to alert
                                you when websites set or access cookies. If you disable or refuse cookies,
                                please note that some parts of this website may become inaccessible or not
                                function properly.</p>

                            <div
                                style={{
                                    background: 'rgba(110, 68, 255, 0.1)',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    margin: '15px 0'
                                }}>
                                <h4
                                    style={{
                                        color: 'var(--primary)'
                                    }}>
                                    <i
                                        className="fas fa-cookie-bite"
                                        style={{
                                            marginRight: '10px'
                                        }}></i>Cookie Preferences</h4>
                                <p>When you first visit our website, we will ask for your consent to use
                                    non-essential cookies. You can change your cookie preferences at any time
                                    through your browser settings.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        id="third-party"
                        style={{
                            scrollMarginTop: '120px'
                        }}>
                        <h2>6. Third-Party Services</h2>
                        <div
                            style={{
                                background: 'var(--dark-light)',
                                padding: '30px',
                                borderRadius: '10px',
                                marginBottom: '40px'
                            }}>
                            <p>We may employ third-party companies and individuals to facilitate our
                                services, provide services on our behalf, or assist us in analyzing how our
                                services are used.</p>

                            <h3>Types of Third-Party Services</h3>
                            <ul>
                                <li>
                                    <strong>Analytics Providers:</strong>
                                    Google Analytics to understand how our services are used</li>
                                <li>
                                    <strong>Payment Processors:</strong>
                                    Stripe, PayPal to handle financial transactions</li>
                                <li>
                                    <strong>Hosting Services:</strong>
                                    AWS, Netlify for website hosting and infrastructure</li>
                                <li>
                                    <strong>Communication Tools:</strong>
                                    Email service providers for customer communications</li>
                            </ul>

                            <p>These third parties have access to your personal information only to perform
                                these tasks on our behalf and are obligated not to disclose or use it for any
                                other purpose.</p>

                            <div
                                style={{
                                    background: 'rgba(110, 68, 255, 0.1)',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    margin: '15px 0'
                                }}>
                                <h4
                                    style={{
                                        color: 'var(--primary)'
                                    }}>
                                    <i
                                        className="fas fa-external-link-alt"
                                        style={{
                                            marginRight: '10px'
                                        }}></i>External Links</h4>
                                <p>Our website may contain links to other sites that are not operated by us. If
                                    you click on a third-party link, you will be directed to that third party's
                                    site. We strongly advise you to review the privacy policy of every site you
                                    visit.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        id="user-rights"
                        style={{
                            scrollMarginTop: '120px'
                        }}>
                        <h2>7. Your Rights</h2>
                        <div
                            style={{
                                background: 'var(--dark-light)',
                                padding: '30px',
                                borderRadius: '10px',
                                marginBottom: '40px'
                            }}>
                            <p>Depending on your location, you may have the following rights regarding your
                                personal information:</p>

                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                    gap: '15px',
                                    margin: '20px 0'
                                }}>
                                <div
                                    style={{
                                        padding: '15px',
                                        background: 'rgba(110, 68, 255, 0.1)',
                                        borderRadius: '8px'
                                    }}>
                                    <h4>
                                        <i
                                            className="fas fa-eye"
                                            style={{
                                                marginRight: '10px',
                                                color: 'var(--primary)'
                                            }}></i>Right to Access</h4>
                                    <p>You have the right to request copies of your personal data.</p>
                                </div>

                                <div
                                    style={{
                                        padding: '15px',
                                        background: 'rgba(110, 68, 255, 0.1)',
                                        borderRadius: '8px'
                                    }}>
                                    <h4>
                                        <i
                                            className="fas fa-edit"
                                            style={{
                                                marginRight: '10px',
                                                color: 'var(--primary)'
                                            }}></i>Right to Rectification</h4>
                                    <p>You have the right to request correction of inaccurate information.</p>
                                </div>

                                <div
                                    style={{
                                        padding: '15px',
                                        background: 'rgba(110, 68, 255, 0.1)',
                                        borderRadius: '8px'
                                    }}>
                                    <h4>
                                        <i
                                            className="fas fa-trash-alt"
                                            style={{
                                                marginRight: '10px',
                                                color: 'var(--primary)'
                                            }}></i>Right to Erasure</h4>
                                    <p>You have the right to request deletion of your personal data.</p>
                                </div>

                                <div
                                    style={{
                                        padding: '15px',
                                        background: 'rgba(110, 68, 255, 0.1)',
                                        borderRadius: '8px'
                                    }}>
                                    <h4>
                                        <i
                                            className="fas fa-ban"
                                            style={{
                                                marginRight: '10px',
                                                color: 'var(--primary)'
                                            }}></i>Right to Restrict Processing</h4>
                                    <p>You have the right to request restriction of processing your data.</p>
                                </div>

                                <div
                                    style={{
                                        padding: '15px',
                                        background: 'rgba(110, 68, 255, 0.1)',
                                        borderRadius: '8px'
                                    }}>
                                    <h4>
                                        <i
                                            className="fas fa-download"
                                            style={{
                                                marginRight: '10px',
                                                color: 'var(--primary)'
                                            }}></i>Right to Data Portability</h4>
                                    <p>You have the right to request transfer of your data to another organization.</p>
                                </div>

                                <div
                                    style={{
                                        padding: '15px',
                                        background: 'rgba(110, 68, 255, 0.1)',
                                        borderRadius: '8px'
                                    }}>
                                    <h4>
                                        <i
                                            className="fas fa-times-circle"
                                            style={{
                                                marginRight: '10px',
                                                color: 'var(--primary)'
                                            }}></i>Right to Object</h4>
                                    <p>You have the right to object to our processing of your personal data.</p>
                                </div>
                            </div>

                            <p>To exercise any of these rights, please contact us using the information
                                provided in the "Contact Us" section.</p>
                        </div>
                    </div>

                    <div
                        id="policy-changes"
                        style={{
                            scrollMarginTop: '120px'
                        }}>
                        <h2>8. Changes to This Policy</h2>
                        <div
                            style={{
                                background: 'var(--dark-light)',
                                padding: '30px',
                                borderRadius: '10px',
                                marginBottom: '40px'
                            }}>
                            <p>We may update our Privacy Policy from time to time. We will notify you of any
                                changes by posting the new Privacy Policy on this page and updating the "Last
                                Updated" date at the top of this policy.</p>

                            <p>We will let you know via email and/or a prominent notice on our service prior
                                to the change becoming effective and update the "effective date" at the top of
                                this Privacy Policy.</p>

                            <p>You are advised to review this Privacy Policy periodically for any changes.
                                Changes to this Privacy Policy are effective when they are posted on this page.</p>

                            <div
                                style={{
                                    background: 'rgba(110, 68, 255, 0.1)',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    margin: '15px 0'
                                }}>
                                <h4
                                    style={{
                                        color: 'var(--primary)'
                                    }}>
                                    <i
                                        className="fas fa-bell"
                                        style={{
                                            marginRight: '10px'
                                        }}></i>Notification of Changes</h4>
                                <p>For material changes to this policy, we will make reasonable efforts to
                                    provide notice through our website or by email at least 30 days before the
                                    changes take effect.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        id="contact"
                        style={{
                            scrollMarginTop: '120px'
                        }}>
                        <h2>9. Contact Us</h2>
                        <div
                            style={{
                                background: 'var(--dark-light)',
                                padding: '30px',
                                borderRadius: '10px',
                                marginBottom: '40px'
                            }}>
                            <p>If you have any questions or concerns about this Privacy Policy or our data
                                practices, please contact us:</p>

                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                    gap: '20px',
                                    margin: '20px 0'
                                }}>
                                <div
                                    style={{
                                        textAlign: 'center',
                                        padding: '20px',
                                        background: 'rgba(110, 68, 255, 0.1)',
                                        borderRadius: '10px'
                                    }}>
                                    <div
                                        style={{
                                            fontSize: '2rem',
                                            color: 'var(--primary)',
                                            marginBottom: '15px'
                                        }}>
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <h4>Email</h4>
                                    <p>cludfee@gmail.com</p>
                                </div>

                                <div
                                    style={{
                                        textAlign: 'center',
                                        padding: '20px',
                                        background: 'rgba(110, 68, 255, 0.1)',
                                        borderRadius: '10px'
                                    }}>
                                    <div
                                        style={{
                                            fontSize: '2rem',
                                            color: 'var(--primary)',
                                            marginBottom: '15px'
                                        }}>
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <h4>Address</h4>
                                    <p>SBM, Mahadevpura<br/>Bengaluru, Karnataka 560016 IN</p>
                                </div>

                                <div
                                    style={{
                                        textAlign: 'center',
                                        padding: '20px',
                                        background: 'rgba(110, 68, 255, 0.1)',
                                        borderRadius: '10px'
                                    }}>
                                    <div
                                        style={{
                                            fontSize: '2rem',
                                            color: 'var(--primary)',
                                            marginBottom: '15px'
                                        }}>
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <h4>Phone</h4>
                                    <p>+91 95088 39640</p>
                                </div>
                            </div>

                            <p>We will respond to all legitimate requests within 30 days. Occasionally, it
                                may take longer if your request is particularly complex or you have made a
                                number of requests.</p>
                        </div>
                    </div>

                    {/* Policy Summary */}
                    <div
                        style={{
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            padding: '30px',
                            borderRadius: '10px',
                            color: 'white',
                            marginTop: '40px'
                        }}>
                        <h3
                            style={{
                                color: 'white',
                                marginBottom: '15px'
                            }}>
                            <i
                                className="fas fa-info-circle"
                                style={{
                                    marginRight: '10px'
                                }}></i>Policy Summary</h3>
                        <p>This Privacy Policy explains how CludFee collects, uses, and protects your
                            personal information. We value your privacy and are committed to being
                            transparent about our data practices. If you have any questions, don't hesitate
                            to contact us.</p>
                        <p
                            style={{
                                fontSize: '0.9rem',
                                opacity: '0.9',
                                marginTop: '15px'
                            }}>This
                            summary is provided for your convenience but is not a substitute for reading the
                            full policy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Policy;