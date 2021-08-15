import { React } from 'react';

import './body-experience.styles.scss';

// import images
import imgIas from './../../assets/icons_work/logo_ias.png';
import imgArmy from './../../assets/icons_work/logo_army.jpg';

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Mes expériences</h2>
      <div className="list-experiences">
        <div className="experience">
          <div className="headers">
            <div className="headers--image">
              <img src={imgIas} alt="logo IAS" />
            </div>
            <div className="headers--text">
              <h3>CDD - Technicien maintenance et assistance informatique</h3>
              <h4>2020 (1 mois)</h4>
              <h5>Idées analyses & solutions</h5>
            </div>
          </div>
          <div className="descriptions">
            <ul>
              <li>Maintenance de Windows Server</li>
              <li>Installation et configuration de postes informatiques</li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <div className="headers">
            <div className="headers--image">
              <img src={imgIas} alt="logo IAS" />
            </div>
            <div className="headers--text">
              <h3>Stage - Technicien maintenance et assistance informatique</h3>
              <h4>2019-2020 (3 mois)</h4>
              <h5>Idées analyses & solutions</h5>
            </div>
          </div>
          <div className="descriptions">
            <ul>
              <li>Gestion de serveurs de messagerie</li>
              <li>Maintenance de MacOS Server</li>
              <li>Support des utilisateurs</li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <div className="headers">
            <div className="headers--image">
              <img src={imgArmy} alt="logo korean army" />
            </div>
            <div className="headers--text">
              <h3>Service militaire (Corée du Sud)</h3>
              <h4>2014-2016 (21 mois)</h4>
              <h5>Army Aviation Operations Command</h5>
            </div>
          </div>
          <div className="descriptions">
            <ul>
              <li>Conducteur de camions</li>
              <li>opérateur de défense sol-air</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
