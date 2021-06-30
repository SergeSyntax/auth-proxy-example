import React from 'react';
import ContainerAbout from './container.style';
import { SectionAbout } from './section.style';
import { ImageAbout } from './image.style';
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
