import { useMutation } from 'react-query';
import { SectionRes } from 'src/components/sections/section-res.interface';
import { proxyAxios } from 'src/util/axios/proxy';
import { ValuesRenameTask } from './values.interface';

export const useRenameSection = () => {
  return useMutation(({ taskId, title }: ValuesRenameTask) =>
    proxyAxios.patch<SectionRes>(`/tasks/${taskId}`, { title })
  );
};
