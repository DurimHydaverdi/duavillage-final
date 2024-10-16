import React from 'react';
import './Modal.scss'; // Create this SCSS file for styling
import { useTranslation } from 'react-i18next';

const Modal = ({ isOpen, onClose, titleKey, children }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{t(titleKey)}</h2> {/* Dynamically translating the title */}
        <div className="modal-body">{children}</div>
        <button onClick={onClose} className="modal-close-button">OK</button>
      </div>
    </div>
  );
};

export default Modal;
