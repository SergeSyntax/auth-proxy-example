import { CardActionArea, CardHeader } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { MenuItemProject } from '../menu';
import { WrapperItemProject } from './wrapper';

interface Props {
  project: ProjectRes;
}

export const ItemProject: React.FC<Props> = ({ project }) => {
  return (
    <WrapperItemProject>
      <Link passHref href={`/board/${project.id}`}>
        <CardActionArea>
          <CardHeader
            title={project.title}
            subheader={project.accessibility ? 'public' : 'private'}
          />
        </CardActionArea>
      </Link>

      <MenuItemProject />
    </WrapperItemProject>
  );
};
