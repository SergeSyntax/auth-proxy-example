import { AxiosError } from 'axios';
import { QueryFunction, QueryKey, useQuery } from 'react-query';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { axios } from 'src/util/axios';

export const getProject: QueryFunction<ProjectRes, QueryKey> = ({ queryKey: [_key, id] }) =>
  axios.get<ProjectRes>(`/projects/${id}`).then(res => res.data);

export const useProject = (id: string) =>
  useQuery<ProjectRes, AxiosError>(['projects', id], getProject);
