import React from 'react';
import { IconButtonUserOptions } from './icon';
import { WrapperButtonUserOptions } from './wrapper';

interface UserPropsInfo {
  name: string;
  email: string;
}

interface Props extends UserPropsInfo {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const getUserNameAndLetter = ({ name = 'unknown', email }: UserPropsInfo) => {
  if (name && name !== 'unknown') {
    const secondLetter = /\s[a-z]/i.exec(name);
    const firstLetter = name[0];
    const letter = secondLetter ? `${firstLetter}${secondLetter[0][1]}` : firstLetter;
    return { name, letter };
  } else {
    const name = email.split('@')[0];
    const letter = name[0].toUpperCase();

    return { name, letter };
  }
};

export const ButtonUserOptions: React.FC<Props> = ({ onClick, name, email }) => {
  const { letter } = getUserNameAndLetter({ name, email });

  return (
    <WrapperButtonUserOptions color="inherit" onClick={onClick}>
      <IconButtonUserOptions>{letter}</IconButtonUserOptions>
    </WrapperButtonUserOptions>
  );
};
