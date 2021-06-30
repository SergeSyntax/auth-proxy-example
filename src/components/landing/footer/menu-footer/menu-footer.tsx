import React from 'react';

import { Logo } from 'src/components/common/logo';
import { Menu } from './list-footer-menu';
import { WrapperFooterMenu } from './wrapper-footer-menu';

export const FooterMenu: React.FC = () => {
  return (
    <WrapperFooterMenu>
      <Logo />
      <Menu />
    </WrapperFooterMenu>
  );
};
