import { useMutation } from 'react-query';
import { proxyAxios } from 'src/util/axios/proxy';
import { TaskRes } from '../task-res.interface';

export const useDeleteTask = () => {
  return useMutation((id: string) => proxyAxios.delete<TaskRes>(`/tasks/${id}`));
};
