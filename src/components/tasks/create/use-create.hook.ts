import { useMutation } from 'react-query';
import { proxyAxios } from 'src/util/axios/proxy';
import { TaskRes } from '../task-res.interface';
import { ValuesTask } from './form/values.interface';

export const useCreateTask = () => {
  return useMutation(({ sectionId, title }: ValuesTask) =>
    proxyAxios.post<TaskRes>(`/sections/${sectionId}/tasks`, { title })
  );
};
