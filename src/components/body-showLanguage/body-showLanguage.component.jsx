import { React } from 'react';

import './body-showLanguage.styles.scss';

//import images
import imgJs from './../../assets/icons_languages/javascript.svg';
import imgNode from './../../assets/icons_languages/node-js.svg';
import imgReact from './../../assets/icons_languages/react-native.svg';
import imgVue from './../../assets/icons_languages/vue-js.svg';
import imgHTML from './../../assets/icons_languages/html-5.svg';
import imgCSS from './../../assets/icons_languages/css3.svg';
import imgJava from './../../assets/icons_languages/logo-java-coffee-cup.svg';
import imgSpring from './../../assets/icons_languages/logo-de-printemps.svg';

const ShowLanguage = () => {
  return (
    <div className="language-container">
      <h2>Mes compétences</h2>
      <div className="list-languages">
        <div className="languages">
          <div className="lang-fw-lib">
            <div className="image-container">
              <img src={imgJs} alt="javascript" />
            </div>
            <p>Javascript</p>
          </div>
          <div className="lang-fw-lib">
            <div className="image-container">
              <img src={imgNode} alt="nodejs" />
            </div>
            <p>Node.js</p>
          </div>
          <div className="lang-fw-lib">
            <div className="image-container">
              <img src={imgReact} alt="react" />
            </div>
            <p>React</p>
          </div>
        </div>
        <div className="languages">
          <div className="lang-fw-lib">
            <div className="image-container">
              <img src={imgHTML} alt="html" />
            </div>
            <p>HTML</p>
          </div>
          <div className="lang-fw-lib">
            <div className="image-container">
              <img src={imgCSS} alt="css" />
            </div>
            <p>CSS</p>
          </div>
        </div>
        <div className="languages">
          <div className="lang-fw-lib">
            <div className="image-container">
              <img src={imgJava} alt="java" />
            </div>
            <p>Java</p>
          </div>
          <div className="lang-fw-lib">
            <div className="image-container">
              <img src={imgSpring} alt="spring" />
            </div>
            <p>Spring</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowLanguage;
