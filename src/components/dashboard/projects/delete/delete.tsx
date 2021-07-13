import { Dialog, ListItemIcon, MenuItem } from '@material-ui/core';
import React, { Fragment } from 'react';
import { GoX } from 'react-icons/go';
import useDialog from 'src/hooks/common/dialog.hook';
import { ContentDeleteProject } from './content';
import { FormDeleteProject } from './form';
import { HeaderDeleteProject } from './header';

interface Props {
  onClick: () => void;
}

export const DeleteProject: React.FC<Props> = ({ onClick }) => {
  const { open, handleOpen, handleClose, handleTabPropagation } = useDialog(false, onClick);
  return (
    <Fragment>
      <MenuItem onClick={handleOpen}>
        <ListItemIcon>
          <GoX />
        </ListItemIcon>
        Delete
      </MenuItem>
      <Dialog maxWidth="sm" open={open} onClose={handleClose} onKeyDown={handleTabPropagation}>
        <HeaderDeleteProject handleClose={handleClose} />
        <ContentDeleteProject projectTitle="G.E.N.E.S.I.S" />
        <FormDeleteProject projectTitle="G.E.N.E.S.I.S" projectId="ewge" />
      </Dialog>
    </Fragment>
  );
};
