import { Dialog } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import { PanelTask } from '../panel';
import { TaskRes } from '../task-res.interface';
import { useTask } from '../use-task';

interface Props {
  taskId: string;
  projectId: string;
}

export const DialogTask: React.FC<Props> = ({ taskId, projectId }) => {
  const router = useRouter();
  const handleClose = () => router.push(`/board/${projectId}`);
  const { data, isLoading } = useTask(taskId as string);

  return (
    <Dialog fullWidth maxWidth="md" onClose={handleClose} open={!!taskId}>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <PanelTask task={data as TaskRes} handleClose={handleClose} />
      )}
    </Dialog>
  );
};
