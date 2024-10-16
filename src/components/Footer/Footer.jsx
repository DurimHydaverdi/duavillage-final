import React from 'react';
import './Footer.scss';
import logo_footer from '../Assets/logo-footer.png';
import { useTranslation } from 'react-i18next';
import { FaInstagram } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection logoSection">
          <img src={logo_footer} alt="Footer Logo" />
        </div>
        <div className="footerSection">
          <h3>{t('footer.contacts')}</h3>
          <ul>
            <li><span role="img" aria-label="phone">📞</span> <a href="tel:+38349100019">{t('footer.phone')}</a></li>
            <li><span role="img" aria-label="email">📧</span> <a href="mailto:duavillage1@gmail.com">{t('footer.email')}</a></li>
            <li><a href='https://tinyurl.com/yc6pvx65' target="_blank" rel="noreferrer"><span role="img" aria-label="location">📍</span> {t('footer.address')}</a></li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>{t('footer.socialMedia')}</h3>
          <ul className="socialMediaIcons">
            <li>
              <a href="https://www.facebook.com/profile.php?id=61561683726067" target="_blank" rel="noopener noreferrer">
                <RiFacebookBoxFill size={24} />
                <span>{t('footer.facebook')}</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dua.village/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
                <span>{t('footer.instagram')}</span>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@duavillage" target="_blank" rel="noopener noreferrer">
                <AiFillTikTok size={24} />
                <span>{t('footer.tiktok')}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p dangerouslySetInnerHTML={{ __html: t('footer.copyright') }}></p>
      </div>
    </footer>
  );
};

export default Footer;
