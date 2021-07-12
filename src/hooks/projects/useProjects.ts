import { useQuery } from 'react-query';
import { axios } from 'src/util/axios';
import { NetError } from '../common/types/error.type';
import { ProjectData } from './types';

// const useQueryCommon = <T>(
//   key: string,
//   url: string,
//   axiosConfig?: AxiosRequestConfig,
//   queryOptions?: UseQueryOptions<T, Error>
// ) =>
//   useQuery<T, Error>(
//     key,
//     () => axios.get<T>(url, axiosConfig).then((res) => res.data),
//     queryOptions
//   );

// export const useProject = () =>
//   useQueryCommon<ProjectData[]>('projects', '/projects', {
//     params: {
//       skip: 0,
//       take: 20,
//     },
//   });

export const useProjects = () =>
  useQuery<ProjectData[], NetError>('projects', () =>
    axios.get<ProjectData[]>('/projects/?skip=0&take=20&orderBy[0][id]=asc').then((res) => res.data)
  );
