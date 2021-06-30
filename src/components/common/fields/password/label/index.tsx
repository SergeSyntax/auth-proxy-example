import React from 'react';
import { IconType } from 'react-icons/lib';
import { InputLabeledPasswordLabelIcon } from './icon.style';
import { PasswordLabelWrapper } from './wrapper.style';
import { IoEyeSharp, IoEyeOffSharp } from 'react-icons/io5';
import { PasswordLabelButton } from './button.style';

interface Props {
  htmlFor: string;
  name: string;
  icon: IconType;
  isHidden: boolean;
  setIsHidden: () => void;
}

export const PasswordLabel: React.FC<Props> = ({
  name,
  htmlFor,
  children,
  icon,
  isHidden,
  setIsHidden,
}) => {
  return (
    <PasswordLabelWrapper htmlFor={htmlFor}>
      <InputLabeledPasswordLabelIcon component={icon} />
      <span>{name}</span>
      <PasswordLabelButton onClick={setIsHidden}>
        {isHidden ? <IoEyeOffSharp /> : <IoEyeSharp />}
      </PasswordLabelButton>
      {children}
    </PasswordLabelWrapper>
  );
};
