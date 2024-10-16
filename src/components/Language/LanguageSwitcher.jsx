import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button className="lang-btn" onClick={() => handleChangeLanguage('en')}>EN</button>
      <span>|</span>
      <button className="lang-btn" onClick={() => handleChangeLanguage('sq')}>AL</button>
    </div>
  );
};

export default LanguageSwitcher;
