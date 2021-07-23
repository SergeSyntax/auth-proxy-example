import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { axios } from 'src/util/axios';

interface GetProjectProps {
  _order: 'desc' | 'asc';
  _sort: keyof ProjectRes;
  filter: [keyof ProjectRes, string];
}

export const getProjects = () =>
  // { _order, _sort, filter: [filterKey, FilterValue] }: GetProjectProps
  axios
    .get<ProjectRes[]>('/projects', {
      // params: { _sort, _order, [filterKey]: FilterValue }
    })
    .then(res => res.data);

export const useProjects = () => useQuery<ProjectRes[], AxiosError>('projects', getProjects);
