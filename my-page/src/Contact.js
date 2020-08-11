import React from 'react';
import ContactForm from './ContactForm'
import Header from './Header';
import headerbanner2 from './pics/headerbanner2.jpg'


function Footer() {
  return (
    <div className="Contact">

      <div className="headersec2">
        <img className="mainpic2" src={headerbanner2} />
        <Header/>
      </div>
        <ContactForm/>
    </div>
  );
}

export default Footer;
