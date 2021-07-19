import { useQuery } from 'react-query';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { axios } from 'src/util/axios';
import { ErrorRes } from '../common/@types/error-res.interface';

export const useProject = (id: string) =>
  useQuery<ProjectRes, ErrorRes>(['projects', id], () =>
    axios.get<ProjectRes>(`/projects/${id}`).then(res => res.data)
  );
