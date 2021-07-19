import { Card, styled } from '@material-ui/core';
import React from 'react';
import { useSections } from './use-sections';
import { WrapperSectionsBoard } from './wrapper.style';

interface Props {
  projectId: string;
}

const WrapperSection = styled(Card)`
  background: #ebecf0;
  max-height: 96%;
  flex-shrink: 0;
  margin: 1rem 0 0;
  min-width: 25rem;

  :not(:last-child) {
    margin-right: 1rem;
  }
`;

const Section: React.FC<{ title: string }> = ({ title }) => (
  <WrapperSection>{title}</WrapperSection>
);

export const SectionsBoard: React.FC<Props> = ({ projectId }) => {
  const { data } = useSections(projectId);

  return (
    <WrapperSectionsBoard>
      {data?.map((project, index) => (
        <Section key={index} title={project.title} />
      ))}
    </WrapperSectionsBoard>
  );
};
