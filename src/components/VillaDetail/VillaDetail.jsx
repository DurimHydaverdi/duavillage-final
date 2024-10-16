import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './VillaDetail.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import VillasData from '../Villas/VillasData';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { FaWifi, FaParking, FaShower, FaTv } from 'react-icons/fa';
import { MdBalcony, MdOutlineBathroom, MdOutlineBedroomParent, MdOutlineLiving } from 'react-icons/md';
import { FaKitchenSet } from 'react-icons/fa6';
import { GiWashingMachine } from 'react-icons/gi';
import { BsBadgeWcFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import p3 from '../Assets/p3.jpg'

const VillaDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const villa = location.state || VillasData.find(v => v.id === parseInt(id));
  const { t } = useTranslation();

  // Filter out duplicate images
  const uniqueImageUrls = Array.from(new Set(villa.images));
  const imageGalleryItems = uniqueImageUrls.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  const handleContact = () => {
    const whatsappNumber = '+38349100019';
    const message = encodeURIComponent(`Hello, I am interested in the villa: ${villa.title}`);
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <Header />
      <img className='background' src={p3} alt='background' />
      <h1 className="h1-v">{t('villas.bookNow')}</h1>
      <div className="villa-detail">
        <div className="villa-header">
          <h1>{villa.title}</h1>
        </div>
        <div className="villa-gallery">
          <ImageGallery
            items={imageGalleryItems}
            showThumbnails={true}
            showPlayButton={false}
          />
        </div>
        <div className="villa-content">
          <div className="villa-info">
            <div className="villa-description">
              <p dangerouslySetInnerHTML={{ __html: t(villa.descriptionKey) }} /> {/* Render HTML */}
            </div>
            <div className="villa-amenities">
              {/* Amenities icons */}
              <div className="amenity"><FaWifi className='desp-icon' /><span>{t('villaDetail.freeWifi')}</span></div>
              <div className="amenity"><FaParking className='desp-icon' /><span>{t('villaDetail.freeParking')}</span></div>
              <div className="amenity"><MdBalcony className='desp-icon' /><span>{t('villaDetail.balcony')}</span></div>
              <div className="amenity"><MdOutlineBathroom className='desp-icon' /><span>{t('villaDetail.privateBathroom')}</span></div>
              <div className="amenity"><FaTv className='desp-icon' /><span>{t('villaDetail.tv50Inch')}</span></div>
              <div className="amenity"><MdOutlineBedroomParent className='desp-icon' /><span>{t('villaDetail.rooms')}</span></div>
              <div className="amenity"><FaShower className='desp-icon' /><span>{t('villaDetail.shower')}</span></div>
              <div className="amenity"><FaKitchenSet className='desp-icon' /><span>{t('villaDetail.kitchen')}</span></div>
              <div className="amenity"><GiWashingMachine className='desp-icon' /><span>{t('villaDetail.washingMachine')}</span></div>
              <div className="amenity"><MdOutlineLiving className='desp-icon' /><span>{t('villaDetail.livingRoom')}</span></div>
              <div className="amenity"><BsBadgeWcFill className='desp-icon' /><span>{t('villaDetail.toilets')}</span></div>
            </div>
          </div>
          <div className="property-summary">
            <div className="property-details">
              <p>{t('villaDetail.location')}</p>
              <div className="details-container">
                <div className="detail-items">
                  <div className="detail-item"><span>{t('villaDetail.contactUsWhatsApp')}</span></div>
                </div>
              </div>
            </div>
            <div className="villas-info">
              <div className="villas-details">
                <button onClick={handleContact} className="contact">{t('villaDetail.contact')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VillaDetail;
