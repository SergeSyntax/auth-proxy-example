import React, { Fragment } from 'react';
import { CreateSection } from '../create';
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
        <Fragment>
          {/* List */}
          {data?.map((section, index) => (
            <ItemSection key={index} section={section} />
          ))}
          {/* Create new */}
          <CreateSection projectId={projectId} />
        </Fragment>
      )}
    </WrapperListSection>
  );
};
