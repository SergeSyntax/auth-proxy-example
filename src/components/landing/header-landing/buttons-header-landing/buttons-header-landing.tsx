import React from 'react';
import Link from 'next/link';
import { PrimaryButtonsHeaderLanding } from './primary-buttons-header-landing.style';
import { SecondaryButtonsHeaderLanding } from './secondary-buttons-header-landing.style';
import { WrapperButtonsHeaderLanding } from './wrapper-buttons-header-landing';

export const ButtonsHeaderLanding: React.FC = () => {
  return (
    <WrapperButtonsHeaderLanding>
      <Link passHref href="/registration">
        <PrimaryButtonsHeaderLanding variant="contained">join now</PrimaryButtonsHeaderLanding>
      </Link>
      <Link passHref href="/login">
        <SecondaryButtonsHeaderLanding variant="outlined">sign in</SecondaryButtonsHeaderLanding>
      </Link>
    </WrapperButtonsHeaderLanding>
  );
};
