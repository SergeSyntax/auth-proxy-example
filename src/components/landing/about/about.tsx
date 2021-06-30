import React from 'react';
import ContainerAbout from './about-container.style';
import { SectionAbout } from './section-about.style';
import { ImageAbout } from './image-about.style';
import { RubricList } from './rubric-list/rubric-list';

export const About: React.FC = () => {
  return (
    <SectionAbout draggable={false}>
      <ContainerAbout>
        <ImageAbout alt="about-paragraph" src="/img/about-image.svg" />
        <RubricList />
      </ContainerAbout>
    </SectionAbout>
  );
};
