import React from 'react';
import './WhatsappContact.scss';
import whatsapp_icon from '../Assets/whatsapp-icon-i-removebg-preview.png'

const WhatsappContact = () => {
  return (
    <a
      href="https://wa.me/38349100019"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-contact"
    >
      <img
        src={whatsapp_icon }
        alt="WhatsApp Contact"
      />
    </a>
  );
};

export default WhatsappContact;
