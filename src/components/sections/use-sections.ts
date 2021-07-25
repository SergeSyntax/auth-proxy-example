import { useQuery } from 'react-query';
import { ErrorRes } from 'src/components/common/@types/error-res.interface';
import { proxyAxios } from 'src/util/axios/proxy';
import { SectionRes } from './section-res.interface';

export const useSections = (projectId: string) =>
  useQuery<SectionRes[], ErrorRes>('sections', () =>
    proxyAxios.get(`/projects/${projectId}/sections?_embed=tasks`).then(res => res.data)
  );
