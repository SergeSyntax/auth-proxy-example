import { GetServerSideProps } from 'next';
import React from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import LayoutDashboard from 'src/components/dashboard/layout-dashboard';
import { PanelProject } from 'src/components/projects/panel';
import { getProjects } from 'src/components/projects/use-projects';

const Projects: React.FC = props => {
  return (
    <LayoutDashboard>
      <PanelProject />
    </LayoutDashboard>
  );
};

// // This gets called on every request
// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery('projects', getProjects);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient)
//     }
//   };
// };

export default Projects;
