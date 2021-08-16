import { React } from 'react';

import './projects-list.styles.scss';

// import images
import imgNest from './../../assets/icons_languages/logo_nestjs.svg';
import imgJs from './../../assets/icons_languages/javascript.svg';
import imgNode from './../../assets/icons_languages/node-js.svg';
// import imgReact from './../../assets/icons_languages/react-native.svg';
import imgVue from './../../assets/icons_languages/vue-js.svg';
import imgHTML from './../../assets/icons_languages/html-5.svg';
import imgCSS from './../../assets/icons_languages/css3.svg';

const github = 'https://github.com';
const projectsUrl = {
  openclassroomsWeb: {
    p1: `${github}/Devgrus/oc_web_p2`,
    p2: `${github}/Devgrus/oc_web_p3`,
    p3: ``,
    p4: `${github}/Devgrus/oc_web_p5`,
    p5: `${github}/Devgrus/oc_web_p6`,
    p6: `${github}/Devgrus/oc_web_p7`,
  },
  thegoodseat: {
    p1: `${github}/Devgrus/tgs_nestjs`,
  },
};

const ProjectsList = () => {
  return (
    <div className="projectsList-container">
      <div className="project-group">
        <h2>Test technique TheGoodSeat</h2>
        <div className="project">
          <div className="image-container">
            <img src={imgNest} alt="logo nestJS" />
            <div className="image-title">
              <span>NestJS</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Backend NestJs</h4>
            <p>
              Construction d'une API permettant de récupérer les prix et les
              temps d’attente de plusieurs compagnies de VTC et Taxis.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.thegoodseat.p1}
            >
              {' '}
              Lien de projet...
            </a>
          </div>
        </div>
      </div>
      <div className="project-group">
        <h2>Projets OpenClassrooms - Développeur Web</h2>
        <div className="project">
          <div className="image-container">
            <img src={imgVue} alt="logo vue.js" />
            <img src={imgNode} alt="logo node.js" />
            <div className="image-title">
              <span>Project 6</span>
              <span>Groupomania</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 6</h4>
            <p>
              Mission Full stack : création du site Groupomania en utilisant
              Vue.js et express.js
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.openclassroomsWeb.p6}
            >
              {' '}
              Lien de projet...
            </a>
          </div>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={imgNode} alt="logo node.js" />
            <div className="image-title">
              <span>Project 5</span>
              <span>So Pekocko</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 5</h4>
            <p>
              Construction d'une API sécurisée pour une application d'avis
              gastronomiques
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.openclassroomsWeb.p5}
            >
              Lien de projet...
            </a>
          </div>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={imgJs} alt="logo javascript" />
            <div className="image-title">
              <span>Project 4</span>
              <span>Orinoco</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 4</h4>
            <p>Construction d'un site e-commerce</p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.openclassroomsWeb.p4}
            >
              Lien de projet...
            </a>
          </div>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={imgHTML} alt="logo HTML" />
            <img src={imgCSS} alt="logo CSS" />
            <div className="image-title">
              <span>Project 3</span>
              <span>La chouette agence</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 3</h4>
            <p>Optimisation d'un site web existant</p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.openclassroomsWeb.p3}
            >
              Lien de projet...
            </a>
          </div>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={imgHTML} alt="logo HTML" />
            <img src={imgCSS} alt="logo CSS" />
            <div className="image-title">
              <span>Project 2</span>
              <span>Ohmyfood</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 2</h4>
            <p>Dynamisez une page web avec des animations CSS</p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.openclassroomsWeb.p2}
            >
              Lien de projet...
            </a>
          </div>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={imgHTML} alt="logo HTML" />
            <img src={imgCSS} alt="logo CSS" />
            <div className="image-title">
              <span>Project 1</span>
              <span>Reservia</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 1</h4>
            <p>Transformez une maquette en site web</p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.openclassroomsWeb.p1}
            >
              Lien de projet...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
