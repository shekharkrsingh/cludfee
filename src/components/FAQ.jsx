import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'The timeline depends on the project complexity. A simple one-page application typically takes 2-4 weeks, while more complex projects can take 8-12 weeks. I\'ll provide a detailed timeline after our initial discussion.'
    },
    {
      question: 'What\'s your pricing model?',
      answer: 'I typically work on a project basis with a fixed price quote. This allows you to know the exact cost upfront. For ongoing work or maintenance, I offer retainer packages at monthly rates.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, I offer various support packages to ensure your application continues to run smoothly after launch. This includes bug fixes, updates, and performance monitoring.'
    },
    {
      question: 'Can you work with my design?',
      answer: 'Absolutely! I can work with your existing design files (Figma, Sketch, Adobe XD, etc.) or create a custom design based on your requirements and preferences.'
    },
    {
      question: 'What\'s your revision policy?',
      answer: 'I include 2 rounds of revisions in my project quotes to ensure you\'re completely satisfied with the final product. Additional revisions can be arranged if needed.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="container">
        <h2 className="section-title reveal">Frequently Asked Questions</h2>
        <div className="faq-container reveal-stagger">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="faq-toggle">
                  <i className="fas fa-plus"></i>
                </span>
              </div>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;