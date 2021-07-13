import { DialogContent, MenuItem } from '@material-ui/core';

import React, { Fragment } from 'react';
import { BiLayerPlus } from 'react-icons/bi';
import useDialog from 'src/hooks/common/dialog.hook';

import { Dialog } from './dialog.style';
import DialogHeader from './header';
import CreateProjectForm from './form';

interface Props {
  onClick: () => void;
}

const CreateProject: React.FC<Props> = ({ onClick }) => {
  const { open, handleOpen, handleClose, handleTabPropagation } = useDialog(false, onClick);

  return (
    <Fragment>
      <MenuItem onClick={handleOpen}>
        <BiLayerPlus /> New Project
      </MenuItem>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        onKeyDown={handleTabPropagation}
      >
        <DialogHeader handleClose={handleClose} />
        <DialogContent>
          <CreateProjectForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default CreateProject;
