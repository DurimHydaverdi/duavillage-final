import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './About.scss'; // Ensure this path is correct
import video from '../Assets/dua-village-video.mp4'; // Ensure this path is correct

const About = (props) => {
  const { t } = useTranslation();
  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    videoRefs.current.forEach((ref, i) => {
      if (i !== index) {
        ref.pause();
      }
    });
  };

  return (
    <section className="about" id="about">
      <h2>{t('about.title')}</h2>
      <div className="content">
        <div className="text-container">
          <h6>{t('about.experience')}</h6>
          <p>{t('about.description')}</p>
        </div>
        <div className="video-container">
          <video ref={ref => videoRefs.current[0] = ref} controls controlsList="nodownload" onPlay={() => handlePlay(0)} width="850px" height="500px">
            <source src={video} />
            {t('video.notSupported')}
          </video>
        </div>
      </div>
    </section>
  );
};

export default About;
