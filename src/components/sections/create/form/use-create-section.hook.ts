import { useMutation } from 'react-query';
import { proxyAxios } from 'src/util/axios/proxy';
import { SectionRes } from '../../section-res.interface';
import { ValuesSection } from './values.interface';

export const useCreateSection = () => {
  return useMutation(({ projectId, title }: ValuesSection) =>
    proxyAxios.post<SectionRes>(`/projects/${projectId}/sections`, { title })
  );
};
