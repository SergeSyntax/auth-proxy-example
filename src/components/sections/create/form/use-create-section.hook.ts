import { useMutation } from 'react-query';
import { axios } from 'src/util/axios';
import { SectionRes } from '../../section-res.interface';
import { ValuesSection } from './values.interface';

export const useCreateSection = () => {
  return useMutation(({ projectId, title }: ValuesSection) =>
    axios.post<SectionRes>(`/projects/${projectId}/sections`, { title })
  );
};
