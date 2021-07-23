import { useMutation } from 'react-query';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { axios } from 'src/util/axios';

export const useDeleteProject = () => {
  return useMutation((id: string) => axios.delete<ProjectRes>(`/projects/${id}`));
};
