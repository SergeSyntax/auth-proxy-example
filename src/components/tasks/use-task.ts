import { AxiosError } from 'axios';
import { QueryFunction, QueryKey, useQuery } from 'react-query';
import { axios } from 'src/util/axios';
import { TaskRes } from './task-res.interface';

export const getTask: QueryFunction<TaskRes, QueryKey> = ({ queryKey: [_key, id] }) =>
  axios.get<TaskRes>(`/tasks/${id}`).then(res => res.data);

export const useTask = (id: string) => useQuery<TaskRes, AxiosError>(['tasks', id], getTask);
