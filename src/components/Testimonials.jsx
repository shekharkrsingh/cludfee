import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    author: 'Rajesh Kumar',
    role: 'Owner, FitLife Gym',
    initial: 'R',
    color: 'hsl(250, 80%, 60%)',
    quote: "CludFee built a fantastic website for my gym. It helped attract more members and manage class schedules easily. Absolutely exceeded my expectations!",
    stars: 5,
  },
  {
    author: 'Anita Verma',
    role: 'Manager, Spice Villa Restaurant',
    initial: 'A',
    color: 'hsl(330, 80%, 55%)',
    quote: "Thanks to CludFee's work, our restaurant now has an online ordering system that's easy to use and brought in more customers than we imagined.",
    stars: 5,
  },
  {
    author: 'Dr. Neelam Joshi',
    role: 'General Practitioner, Joshi Clinic',
    initial: 'N',
    color: 'hsl(170, 60%, 45%)',
    quote: "CludFee created a professional and simple website for my clinic. Patients can now book appointments online with ease — it has been a game-changer.",
    stars: 5,
  },
  {
    author: 'Suresh Patel',
    role: 'Owner, Patel Electronics Store',
    initial: 'S',
    color: 'hsl(200, 75%, 50%)',
    quote: "CludFee designed a modern e-commerce site for my electronics business that helped increase my sales substantially within the first month.",
    stars: 5,
  },
  {
    author: 'Priya Sharma',
    role: 'Founder, Bloom Boutique',
    initial: 'P',
    color: 'hsl(290, 70%, 55%)',
    quote: "CludFee developed a beautiful site for my boutique. It perfectly reflects my brand and helped me reach more customers online. Highly recommended!",
    stars: 5,
  },
];

const StarRating = ({ count }) => (
  <div className="testi-stars">
    {Array.from({ length: count }).map((_, i) => (
      <i key={i} className="fas fa-star"></i>
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [animState, setAnimState] = useState('idle'); // 'idle' | 'exit-next' | 'exit-prev' | 'entering'
  const [displayed, setDisplayed] = useState(0);
  const timerRef = useRef(null);

  const go = (dir) => {
    if (animState !== 'idle') return;
    const exitClass = dir === 'next' ? 'exit-next' : 'exit-prev';
    setAnimState(exitClass);
    setTimeout(() => {
      setDisplayed(prev =>
        dir === 'next'
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length
      );
      setCurrent(prev =>
        dir === 'next'
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length
      );
      setAnimState('entering');
      setTimeout(() => setAnimState('idle'), 450);
    }, 400);
  };

  const goTo = (index) => {
    if (animState !== 'idle' || index === current) return;
    go(index > current ? 'next' : 'prev');
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go('next'), 5000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => go('next'), 5000);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line
  }, []);

  const t = testimonials[displayed];

  const slideClass = [
    'testi-slide',
    animState === 'entering'   ? 'testi-slide--enter'     : '',
    animState === 'exit-next'  ? 'testi-slide--exit-next' : '',
    animState === 'exit-prev'  ? 'testi-slide--exit-prev' : '',
  ].filter(Boolean).join(' ');

  return (
    <section id="testimonials">
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>What Clients Say</h2>
        <p className="testi-subtitle">
          Real results from real clients — here's what they have to say.
        </p>

        <div className="testi-slider-wrapper">
          {/* Prev */}
          <button
            className="testi-arrow"
            onClick={() => { go('prev'); resetTimer(); }}
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Viewport */}
          <div className="testi-viewport">
            <div className={slideClass} key={displayed}>
              <div className="testi-watermark">
                <i className="fas fa-quote-right"></i>
              </div>

              <StarRating count={t.stars} />

              <p className="testi-text">"{t.quote}"</p>

              <div className="testi-author-row">
                <div
                  className="testi-avatar"
                  style={{ background: `linear-gradient(135deg, ${t.color}, hsl(250,80%,72%))` }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="testi-name">{t.author}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Next */}
          <button
            className="testi-arrow"
            onClick={() => { go('next'); resetTimer(); }}
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Dots */}
        <div className="testi-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testi-dot${i === current ? ' testi-dot--active' : ''}`}
              onClick={() => { goTo(i); resetTimer(); }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <p className="testi-counter">{current + 1} / {testimonials.length}</p>
      </div>
    </section>
  );
};

export default Testimonials;