import { Dialog } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  taskId?: string;
  projectId: string;
}

export const PanelTask: React.FC<Props> = ({ taskId, projectId }) => {
  const router = useRouter();

  const handleClose = () => router.push(`/board/${projectId}`);

  return (
    <Dialog maxWidth="md" onClose={handleClose} open={!!taskId}>
      test
    </Dialog>
  );
};
