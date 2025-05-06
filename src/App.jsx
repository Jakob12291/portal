import './assets/styles.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Importera sidor
import Home from './assets/components/Home.jsx';
import About from './assets/components/About.jsx';
import Cv from './assets/components/Cv.jsx';
import Portfolio from './assets/components/Portfolio.jsx';
import Contact from './assets/components/Contact.jsx';
import NotFound from './assets/components/NotFound.jsx';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [easterEggActive, setEasterEggActive] = useState(false); 
  const [inputSequence, setInputSequence] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Visa hamburger meny
  const toggleMenu = () => {
    if (!isModalOpen) {
      setMenuActive(!menuActive);
    }
  };

  // Easter egg: klickandet av logo "mitt cv" byter bakgrund
  const handleLogoClick = () => {
    setEasterEggActive(!easterEggActive);
    document.body.style.backgroundImage = easterEggActive
      ? "none"
      : "url('profile.jpg')";  
  };

  // Easter egg: lyssnar efter tangetbordets input (hemlig kod)
  useEffect(() => {
    const secretCode = '1337';

    const handleKeyDown = (event) => {
      setInputSequence((prev) => {
        const newSequence = prev + event.key;
        if (newSequence.includes(secretCode)) {
          alert('Grattis, du hittade ett påskägg! 🎉');
          return '';
        }
        return newSequence; 
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  const handleModalStateChange = (isOpen) => {
    setIsModalOpen(isOpen);
    if (isOpen) {
      setMenuActive(false);
    }
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo" onClick={handleLogoClick}>Mitt CV</div>
          <div className="hamburger" onClick={toggleMenu}>☰</div>
          <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setMenuActive(false)}>Hem</Link></li>
            <li><Link to="/about" onClick={() => setMenuActive(false)}>Om mig</Link></li>
            <li><Link to="/cv" onClick={() => setMenuActive(false)}>CV</Link></li>
            <li><Link to="/portfolio" onClick={() => setMenuActive(false)}>Portfolio</Link></li>
            <li><Link to="/contact" onClick={() => setMenuActive(false)}>Kontakt</Link></li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/portfolio" element={<Portfolio setModalState={handleModalStateChange} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;