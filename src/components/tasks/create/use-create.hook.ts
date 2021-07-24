import { useMutation } from 'react-query';
import { axios } from 'src/util/axios';
import { TaskRes } from '../task-res.interface';
import { ValuesTask } from './form/values.interface';

export const useCreateTask = () => {
  return useMutation(({ sectionId, title }: ValuesTask) =>
    axios.post<TaskRes>(`/sections/${sectionId}/tasks`, { title })
  );
};
