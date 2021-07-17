import { useQuery } from 'react-query';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { axios } from 'src/util/axios';
import { ErrorRes } from '../../common/@types/error-res.interface';

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
  useQuery<ProjectRes[], ErrorRes>('projects', () =>
    axios.get<ProjectRes[]>('/projects/?skip=0&take=20&orderBy[0][id]=asc').then((res) => res.data)
  );
