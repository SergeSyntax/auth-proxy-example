import React, { Fragment } from 'react';
import { FooterSignature } from './signature-footer';
import { FooterMenu } from './menu-footer';

export const Footer: React.FC = () => {
  return (
    <Fragment>
      <FooterMenu />
      <FooterSignature />
    </Fragment>
  );
};
