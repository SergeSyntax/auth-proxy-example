import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { AuthRes } from 'src/components/common/auth-res.interface';
import { axios } from 'src/util/axios';
import { ValuesLogin } from './values.interface';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation('auth', (values: ValuesLogin) => axios.post<AuthRes>('/auth/login/', values), {
    onSuccess: ({ data }, _variables, _context) => {
      queryClient.setQueryData('auth', data);
      router.push('dashboard');
    },
    onError: (error, variables, context) => {},
    onSettled: (data, error, variables, context) => {},
  });
};
