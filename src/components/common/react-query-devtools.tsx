import { NoSsr } from '@material-ui/core';
import React from 'react';
import { ReactQueryDevtools as ReactQueryDevtoolsPanel } from 'react-query/devtools';

export const ReactQueryDevtools: React.FC = () => {
  return (
    <NoSsr>
      <ReactQueryDevtoolsPanel initialIsOpen={false} />
    </NoSsr>
  );
};
