import { React } from 'react';

import './projects-list.styles.scss';

// import images
import imgJs from './../../assets/icons_languages/javascript.svg';
import imgNode from './../../assets/icons_languages/node-js.svg';
import imgVue from './../../assets/icons_languages/vue-js.svg';
import imgHTML from './../../assets/icons_languages/html-5.svg';
import imgCSS from './../../assets/icons_languages/css3.svg';
import imgSpring from './../../assets/icons_languages/logo-de-printemps.svg';
import imgJava from './../../assets/icons_languages/logo-java-coffee-cup.svg';
import imgReact from './../../assets/icons_languages/react-native.svg';
import imgGitlab from './../../assets/icons_devUtils/gitlab.svg';

const github = 'https://github.com';
const gitlab = 'https://gitlab.com';
const projectsUrl = {
  openclassroomsWeb: {
    p2: `${github}/Devgrus/oc_web_p2`,
    p3: `${github}/Devgrus/oc_web_p3`,
    p4: ``,
    p5: `${github}/Devgrus/oc_web_p5`,
    p6: `${github}/Devgrus/oc_web_p6`,
    p7: `${github}/Devgrus/oc_web_p7`,
  },
  openclassroomsJava: {
    p2: `${github}/Devgrus/OC_JAVA_DA`,
    p4: `${github}/Devgrus/oc_java_p4`,
    p5: `${github}/Devgrus/oc_java_p5`,
    p6: `${github}/Devgrus/oc_java_p6`,
    p7: `${github}/Devgrus/oc_java_p7`,
    p8: `${gitlab}/Devgrus/oc_java_p8`,
    p9: `${github}/Devgrus/oc_java_p9`,
  }

};

const ProjectsList = () => {
  return (
    <div className="projectsList-container">
      <div className="project-group">
        <h2>Projets OpenClassrooms - Développeur d'applicaiton - Java</h2>
        <div className="project">
          <div className="image-container">
            <img src={imgSpring} alt="logo spring" />
            <img src={imgReact} alt="logo react" />
            <div className="image-title">
              <span>Project 9</span>
              <span>Mediscreen</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 9</h4>
            <p>
              Microservice : création du site Mediscreen en utilisant
              React, Spring et docker
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.openclassroomsJava.p9}
            >
              {' '}
              Lien de projet...
            </a>
          </div>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={imgSpring} alt="logo spring" />
            <img src={imgGitlab} alt="logo gitlab" />
            <div className="image-title">
              <span>Project 8</span>
              <span>Tourguide</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 8</h4>
            <p>
              Construction d'une API avec des systèmes distribués (pipeline GitLab CI)
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.openclassroomsJava.p8}
            >
              Lien de projet...
            </a>
          </div>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={imgSpring} alt="logo spring" />
            <div className="image-title">
              <span>Project 7</span>
              <span>Poseidon</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 7</h4>
            <p>Amélioration d'un backend existant (logs, validation de saisie, authentification etc...)</p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.openclassroomsJava.p7}
            >
              Lien de projet...
            </a>
          </div>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={imgSpring} alt="logo Spring" />
            <div className="image-title">
              <span>Project 6</span>
              <span>Pay My Buddy</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 6</h4>
            <p>Création d'une application Web avec Spring et Thymeleaf</p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.openclassroomsJava.p6}
            >
              Lien de projet...
            </a>
          </div>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={imgSpring} alt="logo Spring" />
            <div className="image-title">
              <span>Project 5</span>
              <span>SafetyNet</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 5</h4>
            <p>Création d'un backend avec Spring</p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.openclassroomsJava.p5}
            >
              Lien de projet...
            </a>
          </div>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={imgJava} alt="logo Java" />
            <div className="image-title">
              <span>Project 4</span>
              <span>Park'it</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 4</h4>
            <p>Test d'implémentation d'une nouvelle fonctionnalité Java</p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.openclassroomsJava.p4}
            >
              Lien de projet...
            </a>
          </div>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={imgJava} alt="logo Java" />
            <div className="image-title">
              <span>Project 2</span>
              <span>Heme Biotech</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 2</h4>
            <p>Débuggage d'une application Java</p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.openclassroomsJava.p2}
            >
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
              <span>Project 7</span>
              <span>Groupomania</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 7</h4>
            <p>
              Mission Full stack : création du site Groupomania en utilisant
              Vue.js et express.js
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.openclassroomsWeb.p7}
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
              <span>Project 6</span>
              <span>So Pekocko</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 6</h4>
            <p>
              Construction d'une API sécurisée pour une application d'avis
              gastronomiques
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.openclassroomsWeb.p6}
            >
              Lien de projet...
            </a>
          </div>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={imgJs} alt="logo javascript" />
            <div className="image-title">
              <span>Project 5</span>
              <span>Orinoco</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 5</h4>
            <p>Construction d'un site e-commerce</p>
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
            <img src={imgHTML} alt="logo HTML" />
            <img src={imgCSS} alt="logo CSS" />
            <div className="image-title">
              <span>Project 4</span>
              <span>La chouette agence</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 4</h4>
            <p>Optimisation d'un site web existant</p>
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
              <span>Ohmyfood</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 3</h4>
            <p>Dynamisez une page web avec des animations CSS</p>
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
              <span>Reservia</span>
            </div>
          </div>
          <div className="text-container">
            <h4>Projet 2</h4>
            <p>Transformez une maquette en site web</p>
            <a
              target="_blank"
              rel="noreferrer"
              href={projectsUrl.openclassroomsWeb.p2}
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
