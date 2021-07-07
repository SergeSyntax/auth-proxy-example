import { useQuery } from 'react-query';
import { axios } from 'src/util/axios';

export interface ProjectData {
  id: string;
  title: string;
  accessibility: true;
  createdAt: string;
  updatedAt: string;
  owner: string;
}

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
  useQuery<ProjectData[], Error>('projects', () =>
    axios.get<ProjectData[]>('/projects/?skip=0&take=20&orderBy[0][id]=asc').then((res) => res.data)
  );
