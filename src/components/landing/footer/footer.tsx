import React, { Fragment } from 'react';
import { FooterSignature } from './signature';
import { FooterMenu } from './menu';

export const Footer: React.FC = () => {
  return (
    <Fragment>
      <FooterMenu />
      <FooterSignature />
    </Fragment>
  );
};
