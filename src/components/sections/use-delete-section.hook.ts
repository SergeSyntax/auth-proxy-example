import { useMutation } from 'react-query';
import { axios } from 'src/util/axios';
import { SectionRes } from './section-res.interface';

export const useDeleteSection = () => {
  return useMutation((id: string) => axios.delete<SectionRes>(`/sections/${id}`));
};
