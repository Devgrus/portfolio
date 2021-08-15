import { React } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/cowfinal.svg';

import './header.styles.scss';

const Header = () => {
  return (
    <div className="header-container">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="option-container">
        <Link className="options md" to="/">
          HOME
        </Link>
        <Link className="options" to="/projects">
          PROJETS
        </Link>
        <Link className="options" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
