import React, { useState } from 'react';
import './Contact.scss';
import maps from '../Assets/maps.jpeg';
import Modal from '../Modal/Modal';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, phone, message } = formData;
    let errors = {
      name: '',
      phone: '',
      message: '',
    };

    const countLetters = (str) => {
      return (str.match(/[a-zA-Z]/g) || []).length;
    };

    if (countLetters(name) < 3) {
      errors.name = t('contact.errors.name');
    }

    if (!/^[\d+\-*]+$/.test(phone)) {
      errors.phone = t('contact.errors.phone');
    }

    if (countLetters(message) < 5) {
      errors.message = t('contact.errors.message');
    }

    setFormErrors(errors);

    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        setModalContent(t('contact.modal.success'));
        setIsModalOpen(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setFormErrors({ name: '', phone: '', message: '' });
      } else {
        setModalContent(t('contact.modal.unexpectedResponse'));
        setIsModalOpen(true);
      }
    })
    .catch(error => {
      setModalContent(t('contact.modal.error', { error: error.message }));
      setIsModalOpen(true);
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="contact" id="contact">
      <h2>{t('contact.title')}</h2>
      <h3>{t('contact.subtitle')}</h3>
      <div className="mapContainer">
        <a href='https://tinyurl.com/yc6pvx65' target="_blank" rel="noreferrer">
          <img src={maps} alt="maps" />
        </a>
        <form className="contactForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t('contact.fullName')}
            value={formData.name}
            onChange={handleChange}
            required
          />
          {formErrors.name && <p className="error-message">{formErrors.name}</p>}
          
          <input
            type="email"
            name="email"
            placeholder={t('contact.email')}
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            name="phone"
            placeholder={t('contact.phone')}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
          
          <textarea
            name="message"
            placeholder={t('contact.message')}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {formErrors.message && <p className="error-message">{formErrors.message}</p>}
          
          <button type="submit">{t('contact.sendMessage')}</button>
        </form>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={t('contact.modal.title')}>
        {modalContent}
      </Modal>
    </section>
  );
};

export default Contact;
