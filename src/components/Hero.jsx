import React from 'react';
import Seo from './Seo';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <Seo
                title="CludFee | Full Stack Development & AI-Powered Solutions"
                description="CludFee builds scalable, SEO-friendly applications using React, Java Spring Boot, MongoDB, and AI tools. Book a free consultation today."
                canonical="https://cludfee.netlify.app/"/>
            <div className="container hero-content">
                <h1>Crafting Fast, Scalable One-Page Web Apps That Convert.</h1>
                <p>I'm a full-stack developer helping businesses build responsive,
                    high-performance applications — from concept to launch.</p>
                <div className="hero-btns">
                    <a href="#book-call" className="btn">Book a Free Call</a>
                    <a href="#portfolio" className="btn btn-secondary">View My Work</a>
                </div>
            </div>
            <div className="hero-bg"></div>
        </section>
    );
};

export default Hero;