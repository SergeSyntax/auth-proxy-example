import { styled } from '@material-ui/core';
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

export const PanelTask: React.FC<Props> = ({ task, handleClose }) => {
  return (
    <WrapperPanelTask>
      <HeaderTask task={task} handleClose={handleClose} />
    </WrapperPanelTask>
  );
};
