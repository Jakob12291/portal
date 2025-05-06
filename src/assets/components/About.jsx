import React from 'react';
import '../styles.css';

function About() {
  return (
    <div className="about-page">

      <header>
        <h1>Om mig</h1>
      </header>

      <div className="about-container">
        <main>
          <section>
            <h2>Hej, jag heter Jakob</h2>
            <img src="./profile.jpg" alt="Profilbild" />
            <p className="aboutText">
             Jag är 23 år gammal och bor i botkyrka. Älskar arga cigg gubbar
            </p>
          </section>
        </main>

        <aside>
          <h2>Snabbinfo</h2>
          <ul>
            <li><strong>Namn:</strong> Jakob</li>
            <li><strong>Yrke:</strong> Cigg</li>
            <li><strong>Erfarenhet:</strong> 0 år</li>
            <li><strong>Favorit-språk:</strong> HTML, CSS</li>
          </ul>
        </aside>
      </div>

      <footer>
        <p>&copy; 2001mittV</p>
      </footer>
    </div>
  );
}

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

export default About;