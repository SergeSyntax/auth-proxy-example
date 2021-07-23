import React from 'react';
import { ItemSection } from '../item';
import { SkeletonSection } from '../skeleton';
import { useSections } from '../use-sections';
import { WrapperListSection } from './wrapper.style';

interface Props {
  projectId: string;
}

export const ListSection: React.FC<Props> = ({ projectId }) => {
  const { data, isLoading } = useSections(projectId);
  return (
    <WrapperListSection>
      {isLoading ? (
        <SkeletonSection />
      ) : (
        data?.map((section, index) => <ItemSection key={index} section={section} />)
      )}
    </WrapperListSection>
  );
};
