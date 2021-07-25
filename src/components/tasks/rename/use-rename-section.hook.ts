import { useMutation } from 'react-query';
import { SectionRes } from 'src/components/sections/section-res.interface';
import { axios } from 'src/util/axios';
import { ValuesRenameTask } from './values.interface';

export const useRenameSection = () => {
  return useMutation(({ taskId, title }: ValuesRenameTask) =>
    axios.patch<SectionRes>(`/tasks/${taskId}`, { title })
  );
};
