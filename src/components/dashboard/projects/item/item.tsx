import { Card, CardActionArea, CardHeader } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import { MenuItemProject } from '../menu';

interface Props {
  project: any;
}

export const ItemProject: React.FC<Props> = ({ project }) => {
  return (
    <Card style={{ display: 'flex', marginBottom: '3rem' }}>
      <Link passHref href={`/board/${project.id}`}>
        <CardActionArea>
          <CardHeader
            title={project.title}
            subheader={project.accessibility ? 'public' : 'private'}
          />
        </CardActionArea>
      </Link>

      <MenuItemProject />
    </Card>
  );
};
