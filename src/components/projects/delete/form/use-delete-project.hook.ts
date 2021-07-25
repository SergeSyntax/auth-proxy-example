import { useMutation } from 'react-query';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { proxyAxios } from 'src/util/axios/proxy';

export const useDeleteProject = () => {
  return useMutation((id: string) => proxyAxios.delete<ProjectRes>(`/projects/${id}`));
};
