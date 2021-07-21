import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { axios } from 'src/util/axios';

export const getProjects = () =>
  axios.get<ProjectRes[]>('/projects/?skip=0&take=20&orderBy[0][id]=asc').then(res => res.data);
