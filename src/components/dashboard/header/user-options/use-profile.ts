import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { proxyAxios } from 'src/util/axios/proxy';
import { AuthRes } from '../../../common/@types/auth-res.interface';

export const useProfile = () =>
  useQuery<AuthRes, AxiosError>('auth', () =>
    proxyAxios.get<AuthRes>('/auth/profile').then(res => res.data)
  );
