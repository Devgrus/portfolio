import { React, useEffect } from 'react';

import Header from '../../components/header/header.component';
import AboutMe from '../../components/body-aboutme/body-aboutme.component';
import ShowLanguage from '../../components/body-showLanguage/body-showLanguage.component';
import Educations from '../../components/body-educations/body-educations.component';
import Experience from '../../components/body-experience/body-experience.component';

const Home = () => {
  useEffect(() => {
    document.title = 'Chanwoo KIM | Home';
  }, []);
  return (
    <>
      <Header />
      <AboutMe />
      <ShowLanguage />
      <Educations />
      <Experience />
    </>
  );
};

export default Home;
