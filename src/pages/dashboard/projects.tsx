import React from 'react';

import LayoutDashboard from 'src/components/dashboard/layout-dashboard';
import { ListProject } from 'src/components/dashboard/projects/list/list';

const Projects: React.FC = () => {
  return (
    <LayoutDashboard>
      <ListProject />
    </LayoutDashboard>
  );
};
export default Projects;
