import React from 'react';
import '../styles.css';

function Contact() {
  return (
    <div className="contact-page">
      <header>
        <h1>Kontakt</h1>
      </header>

      <main>
        <section className="contactText">
          <h2>Kontakta</h2>
          <p><strong>e-post:</strong> <a href="mailto:example@example.com">example@example.com</a></p>
          <p><strong> Nr:</strong> 123456789</p>
        </section>
      </main>

      <footer>
        <p>&copy; mitt cs 2001</p>
      </footer>
      
    </div>
  );
}

export default Contact;
