import { useQuery } from 'react-query';
import { axios } from 'src/util/axios';
import { ProjectData } from './types';

export const useProject = (id: string) =>
  useQuery<ProjectData, Error>(['projects', id], () =>
    axios.get<ProjectData>(`/projects/${id}`).then((res) => res.data)
  );
