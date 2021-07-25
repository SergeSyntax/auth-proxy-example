import { useMutation } from 'react-query';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { proxyAxios } from 'src/util/axios/proxy';
import { ValuesProject } from './values.interface';

export const useCreateProject = () => {
  return useMutation((body: ValuesProject) => proxyAxios.post<ProjectRes>('/projects/', body));
};
