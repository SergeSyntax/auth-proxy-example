import { CardContent, styled } from '@material-ui/core';
import React from 'react';
import { HeaderTask } from '../header';
import { TaskRes } from '../task-res.interface';

interface Props {
  task: TaskRes;
  handleClose: () => void;
}

const WrapperPanelTask = styled('div')`
  display: flex;
  flex-direction: column;
`;

const ContentPanelTask = styled(CardContent)`
  padding: 2rem 4.4rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'content menu';
`;

export const PanelTask: React.FC<Props> = ({ task, handleClose }) => {
  return (
    <WrapperPanelTask>
      <HeaderTask task={task} handleClose={handleClose} />
      <ContentPanelTask>
        <div style={{ background: 'red', width: '100' }}>content</div>
        <div style={{ background: 'green', width: '100' }}>menu</div>
      </ContentPanelTask>
    </WrapperPanelTask>
  );
};
