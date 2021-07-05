import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { axios } from 'src/util/axios';
import { UserData } from './types/user-data.interface';

interface LoginCredentials {
  email: string;
  password: string;
}

export const useLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation(
    'auth',
    (loginCredentials: LoginCredentials) => axios.post<UserData>('/auth/login/', loginCredentials),
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
