import { styled } from '@material-ui/core';
import React from 'react';
import { CreateTask, ListTask } from 'src/components/tasks';
import { SectionRes } from '../../section-res.interface';
import { WrapperContentItemSection } from './wrapper';

interface Props {
  section: SectionRes;
}

export const ContentItemSection: React.FC<Props> = ({ section }) => {
  return (
    <WrapperContentItemSection>
      <ListTask tasks={section.tasks} />
      <CreateTask sectionId={section.id} />
    </WrapperContentItemSection>
  );
};
