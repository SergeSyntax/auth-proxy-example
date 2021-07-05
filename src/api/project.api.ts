import { axios } from 'src/util/axios';

interface LoginCredentials {
  email: string;
  password: string;
}

interface ProjectData {
  id: string;
  title: string;
  accessibility: true;
  createdAt: string;
  updatedAt: string;
  owner: string;
}

// export const login = (loginCredentials: LoginCredentials) =>
//   axios.post<ProjectData>('/auth/login/', loginCredentials);

export const getProjects = () =>
  axios.get<ProjectData>('/projects/?skip=0&take=20&orderBy[0][id]=asc');
