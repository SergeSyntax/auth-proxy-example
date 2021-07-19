import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { axios } from 'src/util/axios';
import { RegistrationPayload } from './registration-payload.interface';
import { AuthRes } from '../../common/@types/auth-res.interface';
import { AxiosError } from 'axios';
import { useContext } from 'react';
import { AlertContext } from 'src/components/alert/context';
import { alertDisplayFailureNetwork } from 'src/components/alert/actions';

export const useRegistration = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { dispatch } = useContext(AlertContext);

  return useMutation(
    'auth',
    (registrationPayload: RegistrationPayload) =>
      axios.post<AuthRes>('/auth/registration/', registrationPayload),
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
