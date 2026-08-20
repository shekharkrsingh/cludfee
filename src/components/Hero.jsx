import React from 'react';
import Seo from './Seo';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "CludFee",
        "image": "https://cludfee.netlify.app/logo.png",
        "description": "Affordable, scalable, and SEO-friendly single-page web applications.",
        "url": "https://cludfee.netlify.app",
        "telephone": "",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Online"
        }
    };

    return (
        <section id="home" className="hero" style={{ position: 'relative' }}>
            <Seo
                title="CludFee | Freelance Full Stack Web Developer & AI Solutions"
                description="CludFee builds scalable, SEO-friendly applications using React, Java Spring Boot, MongoDB, and AI tools. Book a free consultation today."
                canonical="https://cludfee.netlify.app/"
                schema={schema}
            />
            
            <ParticlesBackground />

            {/* Ambient Lighting Spheres */}
            <div className="glow-blob-1"></div>
            <div className="glow-blob-2"></div>
            
            <div className="container hero-content" style={{ zIndex: 10, position: 'relative' }}>
                <h1 className="premium-animate" style={{ fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '20px' }}>
                    Crafting Fast, Scalable<br/>
                    <span className="text-gradient">One-Page Web Apps</span><br/>
                    That Convert.
                </h1>
                <p className="premium-animate" style={{ animationDelay: '0.2s' }}>
                    I'm Shekhar Singh, a full-stack developer helping businesses build responsive, 
                    high-performance applications — from concept to launch.
                </p>
                <div className="hero-btns interactive premium-animate" style={{ animationDelay: '0.4s' }}>
                    <a href="#book-call" className="btn interactive" aria-label="Book a free consultation call">Book a Free Call</a>
                    <a href="#portfolio" className="btn btn-secondary interactive" aria-label="View my previous work and portfolio">View My Work</a>
                </div>
            </div>
            <div className="hero-bg"></div>
        </section>
    );
};

export default Hero;