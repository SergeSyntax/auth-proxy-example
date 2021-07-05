import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { axios } from 'src/util/axios';
import { RegistrationPayload } from './types/registration-payload.interface';
import { UserData } from './types/user-data.interface';

export const useRegistration = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation(
    'auth',
    (registrationPayload: RegistrationPayload) =>
      axios.post<UserData>('/auth/registration/', registrationPayload),
    {
      onSuccess: ({ data }, _variables, _context) => {
        queryClient.setQueryData('auth', data);
      },
      onError: (error, variables, context) => {},
      onSettled: (data, error, variables, context) => {
        router.push('dashboard');
      },
    }
  );
};
