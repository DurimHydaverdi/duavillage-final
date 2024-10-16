import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '../Assets/logo.png';
import white_logo from '../Assets/white_logo.png'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../Language/LanguageSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to track if the menu is open
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 320) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Toggle the state between open and close
    document.body.classList.toggle('menu-open', !isOpen); // Disable page scroll when menu is open
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);  // Close the menu after scrolling to the section
  };

  const handleNavigate = (id) => {
    if (window.location.pathname === '/') {
      scrollToSection(id);
    } else {
      navigate('/', { state: { scrollToId: id } });
    }
    setIsOpen(false);  // Close the menu after navigating
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="language-switcher-container">
          <LanguageSwitcher />
        </div>
        <Link to="/"><img className="logo_img" src={white_logo} alt="dua-village-logo" /></Link>
        <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>

      {/* Fullscreen overlay menu */}
      <nav className={`fullscreen-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>{t('header.home')}</Link></li>
          <li><a onClick={() => handleNavigate('about')}>{t('header.about')}</a></li>
          <li><a onClick={() => handleNavigate('amenities')}>{t('header.amenities')}</a></li>
          <li><a onClick={() => handleNavigate('contact')}>{t('header.contact')}</a></li>
          <li><Link to="/villas" className="bookButton">{t('header.bookNow')}</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
