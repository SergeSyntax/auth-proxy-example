import { useMutation } from 'react-query';
import { proxyAxios } from 'src/util/axios/proxy';
import { SectionRes } from '../section-res.interface';

export const useDeleteSection = () => {
  return useMutation((id: string) => proxyAxios.delete<SectionRes>(`/sections/${id}`));
};
