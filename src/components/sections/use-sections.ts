import { useQuery } from 'react-query';
import { ErrorRes } from 'src/components/common/@types/error-res.interface';
import { axios } from 'src/util/axios';
import { SectionRes } from './section-res.interface';

export const useSections = (projectId: string) =>
  useQuery<SectionRes[], ErrorRes>('sections', () =>
    axios.get(`/projects/${projectId}/sections?_embed=tasks`).then(res => res.data)
  );
