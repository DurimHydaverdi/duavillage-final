import React from 'react';
import './Amenities.scss'; // import SCSS file
import { FaWifi, FaParking, FaTv, FaShower } from "react-icons/fa";
import { GiWaterfall } from "react-icons/gi";
import { LuTrees } from "react-icons/lu";
import { useTranslation } from 'react-i18next';

const Amenities = () => {
  const { t } = useTranslation();

  return (
    <section className="amenities" id="amenities">
      <h2>{t('amenities.title')}</h2>
      <div className="amenitiesList">
        <div className="amenity">
          <FaWifi className='fa-icon' />
          <p>{t('amenities.wifi')}</p>
        </div>
        <div className="amenity">
          <FaParking className='fa-icon' />
          <p>{t('amenities.parkingSpace')}</p>
        </div>
        <div className="amenity">
          <FaShower className='fa-icon' />
          <p>{t('amenities.shower')}</p>
        </div>
        <div className="amenity">
          <GiWaterfall className='fa-icon' />
          <p>{t('amenities.waterFall')}</p>
        </div>
        <div className="amenity">
          <LuTrees className='fa-icon' />
          <p>{t('amenities.trees')}</p>
        </div>
        <div className="amenity">
          <FaTv className='fa-icon' />
          <p>{t('amenities.tv')}</p>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
