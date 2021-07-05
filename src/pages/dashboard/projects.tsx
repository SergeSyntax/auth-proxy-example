import React from 'react';
import { useQuery } from 'react-query';
import { getProjects } from 'src/api/project.api';
import LayoutDashboard from 'src/components/dashboard/layout-dashboard';

const Projects: React.FC = () => {
  const projectsQuery = useQuery('projects', getProjects);

  return <LayoutDashboard>Projects</LayoutDashboard>;
};
export default Projects;
