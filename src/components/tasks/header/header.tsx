import { DialogTitle, styled } from '@material-ui/core';
import React, { useState } from 'react';
import { GoX } from 'react-icons/go';
import { IconButton } from 'src/components/common/button/icon';
import { FormRenameTask } from '../rename';
import { TaskRes } from '../task-res.interface';
import { TitleHeaderTask } from './title';

interface Props {
  task: TaskRes;
  handleClose: () => void;
}

const WrapperHeaderTask = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100vh;
  :first-child {
    flex: 1;
  }
`;

const CloseButtonHeaderTask = styled(IconButton)`
  margin-left: 2rem;
  margin-top: 0.429rem;
`;

export const HeaderTask: React.FC<Props> = ({ task, handleClose }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <WrapperHeaderTask>
      {showForm ? (
        <FormRenameTask handleClose={() => setShowForm(true)} task={task} />
      ) : (
        <TitleHeaderTask onClick={() => setShowForm(true)}>{task.title}</TitleHeaderTask>
      )}
      <CloseButtonHeaderTask type="submit" icon={GoX} size="medium" onClick={handleClose} />
    </WrapperHeaderTask>
  );
};
