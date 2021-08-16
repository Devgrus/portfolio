import { React, useEffect } from 'react';

import Header from '../../components/header/header.component';
import ProjectTitle from '../../components/projects-title/projects-title.component';
import ProjectsList from '../../components/projects-list/projects-list.component';

const Projects = () => {
  useEffect(() => {
    document.title = 'Chanwoo KIM | Projets';
  }, []);
  return (
    <>
      <Header />
      <ProjectTitle />
      <ProjectsList />
    </>
  );
};

export default Projects;
