import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { alertDisplayFailureNetwork } from 'src/components/alert/actions';
import { AlertContext } from 'src/components/alert/context';
import { AuthRes } from 'src/components/common/@types/auth-res.interface';
import { proxyAxios } from 'src/util/axios/proxy';
import { ValuesLogin } from './values.interface';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { dispatch } = useContext(AlertContext);

  return useMutation(
    'auth',
    (values: ValuesLogin) => proxyAxios.post<AuthRes>('/auth/login/', values),
    {
      onSuccess: ({ data }, _variables, _context) => {
        queryClient.setQueryData('auth', data);
        router.push('dashboard');
      },
      onError: (error: AxiosError) =>
        dispatch(
          alertDisplayFailureNetwork(error.response?.status as number, 'invalid credentials')
        )
    }
  );
};
