import { useMutation } from 'react-query';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { axios } from 'src/util/axios';
import { ValuesProject } from './values.interface';

export const useCreateProject = () => {
  return useMutation((body: ValuesProject) => axios.post<ProjectRes>('/projects/', body));
};
