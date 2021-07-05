import { useQuery } from 'react-query';
import { axios } from 'src/util/axios';
import { UserData } from './types/user-data.interface';

export const useProfile = () => useQuery('auth', () => axios.get<UserData>('/auth/profile'));
