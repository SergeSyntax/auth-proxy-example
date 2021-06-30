import React from 'react';
import { WrapperHeaderLanding } from './wrapper-landing-header.style';
import { TitleHeaderLanding } from './title-header-landing';
import { ScrollDownButton } from './scroll-down-button';
import { LogoHeaderLanding } from './logo-header-landing.style';
import { ButtonsHeaderLanding } from './buttons-header-landing';
// import { LandingHeaderLogo } from './landing-header-logo';

export const LandingHeader: React.FC = () => {
  return (
    <WrapperHeaderLanding>
      <LogoHeaderLanding />
      <TitleHeaderLanding />
      <ButtonsHeaderLanding />
      <ScrollDownButton />
    </WrapperHeaderLanding>
  );
};
