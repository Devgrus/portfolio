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
        <p>Je viens de finir ma formation Développeur d'application - Java (RNCP niveau 6 / Bac + 3/4).
          Actuellement, je suis à la recherche d'un emploi dans le domaine de développement Backend.
        </p>
        <p>Je peux me déplacer à Paris et en région parisienne (télétravail également possible).</p>
      </div>
      <div className="bottom-block"></div>
    </div>
  );
};

export default AboutMe;
