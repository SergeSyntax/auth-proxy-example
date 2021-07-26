import { useMutation } from 'react-query';
import { SectionRes } from 'src/components/sections/section-res.interface';
import { proxyAxios } from 'src/util/axios/proxy';
import { ValuesDueDateTask } from './values.interface';

export const useDueDateTask = () => {
  return useMutation(({ taskId, dueDate }: ValuesDueDateTask) =>
    proxyAxios.patch<SectionRes>(`/tasks/${taskId}`, { dueDate })
  );
};
