import { useMutation } from 'react-query';
import { SectionRes } from 'src/components/sections/section-res.interface';
import { axios } from 'src/util/axios';
import { ValuesRenameSection } from './values.interface';

export const useRenameSection = () => {
  return useMutation(({ sectionId, title }: ValuesRenameSection) =>
    axios.patch<SectionRes>(`/sections/${sectionId}`, { title })
  );
};
