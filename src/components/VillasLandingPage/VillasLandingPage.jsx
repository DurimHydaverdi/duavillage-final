import React from 'react';
import './VillasLandingPage.scss';
import background from '../Assets/backgroundVillas.jpg';
import outside from '../Assets/outside.jpg';
import p1 from '../Assets/p1.jpg';
import collage from '../Assets/collage.jpeg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const VillasLandingPage = () => {
  const { t } = useTranslation();

  // Function to handle scrolling to the top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="villas-landing-page">
      <div className="facilities-section">
        <h2>{t('villasLandingPage.exploreOurVillas')}</h2>
        <ul className="facilities-list">
          <h2>{t('villasLandingPage.rooms')}</h2>
          <h2 className="active">{t('villasLandingPage.grillArea')}</h2>
          <h2>{t('villasLandingPage.balconyTerrace')}</h2>
          <h2>{t('villasLandingPage.kitchen')}</h2>
          <Link to="/villas">
            <button className='view-more' onClick={handleScrollToTop}>
              {t('villasLandingPage.exploreMore')}
            </button>
          </Link>
        </ul>
      </div>
      <div className="images-section">
        <img src={background} alt="Lounge Area 1" />
        <img src={outside} alt="Lounge Area 2" />
        <img src={p1} alt="Lounge Area 3" />
        <img className='collage' src={collage} alt='Collage-Photo' />
      </div>
    </div>
  );
};

export default VillasLandingPage;
