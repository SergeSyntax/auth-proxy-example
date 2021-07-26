import { capitalize, styled, Typography } from '@material-ui/core';
import React from 'react';
import { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  label: string;
  name: string;
}

const WrapperLabelTask = styled('label')`
  font-size: 1.7rem;
  display: inline-flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: 500;
  letter-spacing: 0.15rem;
`;
const IconLabelTask = styled('span')`
  margin-right: 1rem;
`;

const TitleLabelTask = styled(Typography)`
  font-size: inherit;
  letter-spacing: inherit;
  font-weight: inherit;
`;

export const LabelTask: React.FC<Props> = ({ icon: Icon, label, name, ...rest }) => {
  return (
    <WrapperLabelTask htmlFor={name} {...rest}>
      <IconLabelTask>
        <Icon />
      </IconLabelTask>
      <TitleLabelTask>{capitalize(label)}</TitleLabelTask>
    </WrapperLabelTask>
  );
};
