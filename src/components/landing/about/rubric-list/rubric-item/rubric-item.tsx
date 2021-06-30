import React from 'react';
import { WrapperRubricItem } from './wrapper-rubric-item.style';
import { ImageRubricItem } from './image-rubric-item.style';
import { TitleRubricItem } from './title-rubric-item.style';
import { ParagraphRubricItem } from './paragraph-rubric-item.style';

interface Props {
  illustration: string;
  title: string;
  paragraph: string;
  alt: string;
}

export const RubricItem: React.FC<Props> = ({ illustration, title, paragraph, alt }) => {
  return (
    <WrapperRubricItem>
      <ImageRubricItem src={illustration} alt={alt} />
      <TitleRubricItem>{title}</TitleRubricItem>
      <ParagraphRubricItem>{paragraph}</ParagraphRubricItem>
    </WrapperRubricItem>
  );
};
