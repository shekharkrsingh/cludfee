import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Expectations from './components/Expectations';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import BookCall from './components/BookCall';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Terms from './components/Terms';
import Pricing from './components/Pricing';
import PersonalDetails from './components/PersonalDetails';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.body.className = `${theme}-theme`;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(
            prevTheme => prevTheme === 'dark'
                ? 'light'
                : 'dark'
        );
    };

    return (
        <Router>
            <div className={`App ${theme}-theme`}>
                <Navbar theme={theme} toggleTheme={toggleTheme}/>
                <Routes>
                    {/* Main Landing Page */}
                    <Route
                        path="/"
                        element={<> < Hero /> <About/>
                        <Services/>
                        <TechStack/>
                        <Expectations/>
                        <Process/>
                        <Portfolio/>
                        <Testimonials/>
                        <BookCall/>
                        <FAQ/>
                        <CTA/>
                        <Contact/>
                    </>
                        }
                    /> {/* Separate Routes */}
                    <Route path="/terms" element={<Terms />}/>
                    <Route path="/pricing" element={<Pricing />}/>
                    <Route path="/personal-details" element={<PersonalDetails />}/>
                </Routes>
                <Footer/>
                <Chatbot/>
            </div>
        </Router>

    );
}

export default App;
