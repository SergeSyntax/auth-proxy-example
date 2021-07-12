import { useQuery } from 'react-query';
import { axios } from 'src/util/axios';
import { NetError } from '../common/types/error.type';
import { ProjectData } from './types';

export const useProject = (id: string) =>
  useQuery<ProjectData, NetError>(['projects', id], () =>
    axios.get<ProjectData>(`/projects/${id}`).then((res) => res.data)
  );
