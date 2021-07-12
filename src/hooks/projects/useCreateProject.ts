import { useMutation } from 'react-query';
import { axios } from 'src/util/axios';
import { ProjectData, ProjectPayload } from './types';

export const useCreateProject = () => {
  return useMutation((body: ProjectPayload) => axios.post<ProjectData>('/projects/', body));
};
