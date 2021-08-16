import { React, useEffect } from 'react';

import Header from '../../components/header/header.component';
import ContactTitle from '../../components/contact-title/contact-title.component';
import ContactBody from '../../components/contact-body/contact-body.component';

const Contact = () => {
  useEffect(() => {
    document.title = 'Chanwoo KIM | Contact';
  }, []);
  return (
    <>
      <Header />
      <ContactTitle />
      <ContactBody />
    </>
  );
};

export default Contact;
