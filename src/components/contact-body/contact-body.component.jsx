import { React } from 'react';

import './contact-body.styles.scss';

const myContact = {
  email: {
    email: 'chanwoo.kim@outlook.fr',
    mailto: 'mailto:',
  },
  phoneNumber: '+33 7 68 51 00 86',
  linkedIn: 'https://www.linkedin.com/in/chanwoo-kim-fr/',
};

const ContactBody = () => {
  return (
    <div className="contactBody-container">
      <div className="text-container">
        <div className="info">
          <span>Téléphone : </span>
          <span>+33 7 68 51 00 86</span>
        </div>
        <div className="info">
          <span>E-mail : </span>
          <span>
            <a href={myContact.email.mailto + myContact.email.email}>
              {myContact.email.email}
            </a>
          </span>
        </div>
        <div className="info">
          <span>LinkedIn : </span>
          <span>
            <a target="_blank" rel="noreferrer" href={myContact.linkedIn}>
              {myContact.linkedIn}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
