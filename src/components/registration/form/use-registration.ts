import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { RegistrationPayload } from './registration-payload.interface';
import { AuthRes } from '../../common/@types/auth-res.interface';
import { AxiosError } from 'axios';
import { useContext } from 'react';
import { AlertContext } from 'src/components/alert/context';
import { alertDisplayFailureNetwork } from 'src/components/alert/actions';
import { proxyAxios } from 'src/util/axios/proxy';

export const useRegistration = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { dispatch } = useContext(AlertContext);

  return useMutation(
    'auth',
    (registrationPayload: RegistrationPayload) =>
      proxyAxios.post<AuthRes>('/auth/registration/', registrationPayload),
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
