import { React } from 'react';

import './body-educations.styles.scss';

// imports images
import imgOC from './../../assets/icons_edu/logo_oc.png';
import imgInsta from './../../assets/icons_edu/logo_insta.jpg';
import imgIesig from './../../assets/icons_edu/logo_iesig.jpg';

const Educations = () => {
  return (
    <div className="educations-container">
      <h2>Mes formations</h2>
      <div className="list-educations">
        <div className="education">
          <div className="headers">
            <div className="headers--image">
              <img src={imgOC} alt="logo openclassrooms" />
            </div>
            <div className="headers--text">
              <h3>Développeur Web - OpenClassrooms</h3>
              <h4>Titre de niveau V (RNCP NSF 326t) | 2020 - 2021</h4>
            </div>
          </div>
          <div className="descriptions">
            <ul>
              <li>Projet 6 - Créez un réseau social d'entreprise</li>
              <li>
                Projet 5 - Construisez une API sécurisée pour une application
                d'avis gastronomiques
              </li>
              <li>Projet 4 - Construisez un site e-commerce</li>
              <li>Projet 3 - Optimisez un site web existant</li>
              <li>Projet 2 - Dynamisez une page web avec des animations CSS</li>
              <li>Projet 1 - Transformez une maquette en site web</li>
            </ul>
          </div>
        </div>
        <div className="education">
          <div className="headers">
            <div className="headers--image">
              <img src={imgInsta} alt="logo école insta" />
            </div>
            <div className="headers--text">
              <h3>BTS SIO option SISR - École INSTA (Paris 5ème)</h3>
              <h4>Bac + 2 | 2018 - 2020</h4>
            </div>
          </div>
        </div>
        <div className="education">
          <div className="headers">
            <div className="headers--image">
              <img src={imgIesig} alt="logo école iesig" />
            </div>
            <div className="headers--text">
              <h3>
                Diplôme d'études en langue française A1-B2 - IESIG (Paris 13ème)
              </h3>
              <h4>DELF B2 | 2016 - 2018</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educations;
