import React from 'react';

import { Logo } from 'src/components/common/logo';
import { Menu } from './list';
import { WrapperFooterMenu } from './wrapper';

export const FooterMenu: React.FC = () => {
  return (
    <WrapperFooterMenu>
      <Logo />
      <Menu />
    </WrapperFooterMenu>
  );
};
