import React from 'react';

import Layout from '../../components/Layout';
import { Project } from '../../components';

import { projectsData } from '.';

const Projects = () => (
  <Layout>
    <h1>Projects</h1>
    <p>
      For more projects, check out my{' '}
      <a href="https://github.com/davidlamt">GitHub</a>.
    </p>
    {projectsData.map(project => (
      <Project key={project.title} project={project} />
    ))}
  </Layout>
);

export default Projects;
