import { AxiosError } from 'axios';
import { QueryFunction, QueryKey, useQuery } from 'react-query';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { proxyAxios } from 'src/util/axios/proxy';

export const getProject: QueryFunction<ProjectRes, QueryKey> = ({ queryKey: [_key, id] }) =>
  proxyAxios.get<ProjectRes>(`/projects/${id}`).then(res => res.data);

export const useProject = (id: string) =>
  useQuery<ProjectRes, AxiosError>(['projects', id], getProject);
