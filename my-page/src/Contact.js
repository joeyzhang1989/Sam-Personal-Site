import React from 'react';
import ContactForm from './ContactForm'
import Header from './Header';



function Footer() {
  return (
    <div className="Contact">

      <div className="resumebanner">

        <div className="textsec">

          <h2><i class="far fa-envelope"/> Contact Me</h2>

        </div>
      </div>

      <ContactForm />

      
    </div>
  );
}

export default Footer;
