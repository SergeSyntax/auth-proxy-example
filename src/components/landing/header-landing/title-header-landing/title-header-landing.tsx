import React from 'react';
import { MainTitleHeaderLanding } from './main-title-header-landing.style';
import { SubTitleHeaderLanding } from './sub-title-header-landing.style';
import { WrapperTitleHeaderLanding } from './wrapper-title-header-landing.style';

export const TitleHeaderLanding: React.FC = () => {
  return (
    <WrapperTitleHeaderLanding>
      <MainTitleHeaderLanding>assign your team</MainTitleHeaderLanding>
      <SubTitleHeaderLanding>to the right direction</SubTitleHeaderLanding>
    </WrapperTitleHeaderLanding>
  );
};
