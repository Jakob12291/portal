function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

import React from 'react';
import '../styles.css';

function Home() {
  return (
    <div className="home-page">

      {/* Header */}
      <header>
        <h1>Välkommen till mitt CV</h1>
      </header>

      {/* Main Content */}
      <main>
        <section className="homeText">
          <h2>Hej!</h2>
          <p>Välkommen till min personliga webbplats.</p>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2001      CV</p>
      </footer>
    </div>
  );
}


export default Home;

