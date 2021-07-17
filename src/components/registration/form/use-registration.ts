import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { axios } from 'src/util/axios';
import { RegistrationPayload } from './registration-payload.interface';
import { AuthRes } from '../../common/@types/auth-res.interface';

export const useRegistration = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation(
    'auth',
    (registrationPayload: RegistrationPayload) =>
      axios.post<AuthRes>('/auth/registration/', registrationPayload),
    {
      onSuccess: ({ data }, _variables, _context) => {
        queryClient.setQueryData('auth', data);
        router.push('dashboard');
      },
      onError: (error, variables, context) => {},
      onSettled: (data, error, variables, context) => {},
    }
  );
};
