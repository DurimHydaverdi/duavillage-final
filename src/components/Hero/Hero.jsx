import React, { useState, useEffect } from 'react';
import './Hero.scss';
import background from '../Assets/outside.jpg';
import backgroundVilla from '../Assets/backgroundVillas.jpg';
import file from '../Assets/file.png';
import white_logo from '../Assets/white_logo.png';
import Header from '../Header/Header';

const Hero = () => {
  const images = [background, backgroundVilla, file];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change images every 6 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      <Header />
      <div className="image-wrapper">
        {images.map((img, index) => (
          <img
            key={index}
            className={`background ${index === currentImage ? 'fade-in' : 'fade-out'}`}
            src={img}
            alt={`background ${index}`}
          />
        ))}
      </div>
      <div className="heroText">
        <img src={white_logo} className='white-logo' alt="Logo" />
      </div>
    </section>
  );
};

export default Hero;
