import { useMutation } from 'react-query';
import { SectionRes } from 'src/components/sections/section-res.interface';
import { proxyAxios } from 'src/util/axios/proxy';
import { ValuesRenameSection } from './values.interface';

export const useRenameSection = () => {
  return useMutation(({ sectionId, title }: ValuesRenameSection) =>
    proxyAxios.patch<SectionRes>(`/sections/${sectionId}`, { title })
  );
};
