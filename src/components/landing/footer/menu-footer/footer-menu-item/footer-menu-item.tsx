import React from 'react';
import { LinkItemFooterMenu } from './link-item-footer-menu.style';
import { WrapperItemFooterMenu } from './wrapper-item-footer-menu.style';
import Link from 'next/link';

interface Props {
  title: string;
  path: string;
}

export const FooterMenuItem: React.FC<Props> = ({ title, path }) => {
  return (
    <WrapperItemFooterMenu key={title}>
      <Link passHref href={path}>
        <LinkItemFooterMenu>{title} </LinkItemFooterMenu>
      </Link>
    </WrapperItemFooterMenu>
  );
};
