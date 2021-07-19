import { useQuery } from 'react-query';
import { ErrorRes } from 'src/components/common/error-res.interface';
import { axios } from 'src/util/axios';
import { AuthRes } from '../../../common/@types/auth-res.interface';

export const useProfile = () =>
  useQuery<AuthRes, ErrorRes>('auth', () =>
    axios.get<AuthRes>('/auth/profile').then(res => res.data)
  );
