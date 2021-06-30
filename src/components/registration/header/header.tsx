import React, { ReactElement } from 'react';
import { LogoHeaderRegistration } from './logo.style';
import { TextHeaderRegistration } from './text.style';
import { WrapperHeaderRegistration } from './wrapper.style';

export default function HeaderRegistration(): ReactElement {
  return (
    <WrapperHeaderRegistration>
      <LogoHeaderRegistration />
      <TextHeaderRegistration>make most of your teamwork!</TextHeaderRegistration>
    </WrapperHeaderRegistration>
  );
}
