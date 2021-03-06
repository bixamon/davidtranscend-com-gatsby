import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Tag } from './';

const ProjectContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const InfoContainer = styled.div`
  text-align: center;
`;

const ProjectTitle = styled.p`
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 1rem;
`;

const ProjectDescription = styled.p`
  margin-bottom: 0;
`;

const Link = styled.a`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 1.5rem;
  width: 90%;
`;

const Project = ({ project }) => {
  const { description, image: Image, links, tags, title } = project;

  return (
    <ProjectContainer>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <InfoContainer>
        {tags.map(tag => (
          <Tag key={tag} tagName={tag} />
        ))}
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        {links.map(link => (
          <Link href={link.url} key={link.url}>
            {link.name}
          </Link>
        ))}
      </InfoContainer>
    </ProjectContainer>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.func.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Project;
