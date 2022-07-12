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
              <h3>Développeur d'application Java - OpenClassrooms</h3>
              <h4>Titre de niveau VI (Bac + 3/4) | 2021 - 2022</h4>
            </div>
          </div>
          <div className="descriptions">
            <ul>
              <li>Projet 9 - Développez une solution en microservices pour votre client</li>
              <li>Projet 8 - Améliorez votre application avec des systèmes distribués</li>
              <li>Projet 7 - Transformez votre backend en API pour rendre votre application plus flexible</li>
              <li>Projet 6 - Concevez une application web Java de A à Z</li>
              <li>Projet 5 - Créez votre première application web avec Spring Boot</li>
              <li>Projet 4 - Testez l'implémentation d'une nouvelle fonctionnalité Java</li>
              <li>Projet 3 - Identifiez les besoins de votre client pour concevoir l'application de ses rêves</li>
              <li>Projet 2 - Débuggez une application Java</li>
              <li>Projet 1 - Démarrez votre formation de Développeur d'application Java</li>
            </ul>
          </div>
        </div>
        <div className="education">
          <div className="headers">
            <div className="headers--image">
              <img src={imgOC} alt="logo openclassrooms" />
            </div>
            <div className="headers--text">
              <h3>Développeur Web - OpenClassrooms</h3>
              <h4>Titre de niveau V (Bac + 2) | 2020 - 2021</h4>
            </div>
          </div>
          <div className="descriptions">
            <ul>
              <li>Projet 7 - Créez un réseau social d'entreprise</li>
              <li>
                Projet 6 - Construisez une API sécurisée pour une application
                d'avis gastronomiques
              </li>
              <li>Projet 5 - Construisez un site e-commerce</li>
              <li>Projet 4 - Optimisez un site web existant</li>
              <li>Projet 3 - Dynamisez une page web avec des animations CSS</li>
              <li>Projet 2 - Transformez une maquette en site web</li>
              <li>Projet 1 - Prenez en main votre formation de développeur web</li>
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
