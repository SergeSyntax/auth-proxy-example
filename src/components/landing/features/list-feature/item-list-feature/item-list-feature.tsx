import { ParagraphItemListFeature } from './paragraph-item-list-feature.style';
import React from 'react';
import { IconType } from 'react-icons/lib';
import { WrapperItemListFeature } from './wrapper-item-list-feature.style';
import { TitleItemListFeature } from './title-item-list-feature.style';
import { IconItemListFeatureFeature } from './icon-item-list-feature';

interface Props {
  title: string;
  content: string;
  icon: IconType;
}

export const ItemListFeature: React.FC<Props> = ({ icon, title, content }) => {
  return (
    <WrapperItemListFeature>
      <IconItemListFeatureFeature component={icon} />
      <TitleItemListFeature>{title}</TitleItemListFeature>
      <ParagraphItemListFeature>{content}</ParagraphItemListFeature>
    </WrapperItemListFeature>
  );
};
