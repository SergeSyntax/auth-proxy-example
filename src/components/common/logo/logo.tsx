import React from 'react';
import { LogoIcon } from './icon-logo.style';
import { LogoText } from './text-logo.style';
import LogoWrapper from './wrapper-logo.style';

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = (props) => {
  return (
    <LogoWrapper {...props}>
      <LogoIcon />
      <LogoText>Assign</LogoText>
    </LogoWrapper>
  );
};
