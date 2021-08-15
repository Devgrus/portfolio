import { React } from 'react';

import selfie from '../../assets/cw.jpg';
import './body-aboutme.styles.scss';

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <div className="image-container">
        <img src={selfie} alt="chanwoo selfie" />
      </div>
      <div className="text-container">
        <h1>Développeur Web Junior</h1>
        <h2>Chanwoo KIM</h2>
        <p>Actuellement, je suis à la recherche d'une alternance.</p>
      </div>
      <div className="bottom-block"></div>
    </div>
  );
};

export default AboutMe;
