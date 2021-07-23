import React from 'react';
import { SectionRes } from '../section-res.interface';
import { WrapperItemSection } from './wrapper';

interface Props {
  section: SectionRes;
}

export const ItemSection: React.FC<Props> = ({ section }) => {
  return <WrapperItemSection>{section.title}</WrapperItemSection>;
};
