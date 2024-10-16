import React from 'react';
import { Link } from 'react-router-dom';
import VillasData from './VillasData';
import './Villas.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import p3 from '../Assets/p3.jpg';
import { useTranslation } from 'react-i18next';

const Villas = () => {
  const { t } = useTranslation();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      <img className='background' src={p3} alt='background' />
      {/* Use t('villas.chooseYourVilla') for translation */}
      <h1 className="h1-v">{t('villas.chooseYourVilla')}</h1>
      <section className="villas">
        {VillasData.map((villa) => (
          <Link
            key={villa.id}
            to={`/villas/${villa.id}`}
            className="villa-card"
          >
            <div className="villa-image-container">
              <img src={villa.images[0]} alt={villa.title} />
            </div>
            <div className="villa-content">
              <h2>{villa.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: t(villa.descriptionKey) }} /> {/* Render HTML */}
              <span></span>
              {/* Use t('villas.bookNow') for translation */}
              <button className="book-now" onClick={handleScrollToTop}>
                {t('villas.bookNow')}
              </button>
            </div>
          </Link>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Villas;
