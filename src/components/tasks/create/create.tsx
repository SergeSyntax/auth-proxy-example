import { Button, styled } from '@material-ui/core';
import React from 'react';
import { GoPlus } from 'react-icons/go';

interface Props {
  sectionId: string;
}

const WrapperCreateTask = styled('div')`
  margin: 0.8rem 0;
  display: flex;
`;

const IconButtonCreateTask = styled(GoPlus)`
  margin-right: 1rem;
  font-size: 0.8em;
`;

export const CreateTask: React.FC<Props> = props => {
  return (
    <WrapperCreateTask>
      <Button fullWidth color="inherit">
        <IconButtonCreateTask /> Create Task
      </Button>
    </WrapperCreateTask>
  );
};
