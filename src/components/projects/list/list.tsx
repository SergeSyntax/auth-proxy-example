import { AxiosError } from 'axios';
import React, { Fragment } from 'react';
import { useQuery } from 'react-query';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { ItemProject } from '../item';
import { SkeletonProject } from '../skeleton';
import { getProjects, useProjects } from '../use-projects';
import { ContainerProjectList } from './container';
import { WrapperListProject } from './wrapper';

interface Props {}

export const ListProject: React.FC<Props> = () => {
  const { isLoading, isError, data, error } = useProjects();
  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <ContainerProjectList>
      <WrapperListProject>
        {isLoading ? (
          <SkeletonProject />
        ) : (
          <Fragment>
            {data?.map(project => (
              <ItemProject key={project.id} project={project} />
            ))}
          </Fragment>
        )}
      </WrapperListProject>
    </ContainerProjectList>
  );
  // if (isLoading) return <div>loading</div>;
  // return <div>{data?.data?.map((item) => item.title)}</div>;
};
