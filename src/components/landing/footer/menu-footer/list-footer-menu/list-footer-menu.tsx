import React from 'react';
import { FooterMenuItem } from '../footer-menu-item';
import { FOOTER_MENU_LIST } from './list-footer-menu.constant';
import { WrapperMenuListFooter } from './wrapper-list-footer-menu.style';

export const Menu: React.FC = () => (
  <WrapperMenuListFooter>
    {FOOTER_MENU_LIST.map((item) => (
      <FooterMenuItem key={item.title} {...item} />
    ))}
  </WrapperMenuListFooter>
);
