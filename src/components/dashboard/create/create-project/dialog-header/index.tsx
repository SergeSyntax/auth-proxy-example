import React from 'react';
import { Typography } from '@material-ui/core';
import { DialogHeaderWrapper } from './wrapper';
import { CloseButton } from './close-button.style';
import { MdClose } from 'react-icons/md';
interface Props {
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
}

const DialogHeader: React.FC<Props> = ({ handleClose }) => {
  return (
    <DialogHeaderWrapper>
      <Typography variant="h6" component="span">
        Create Project
      </Typography>
      <CloseButton aria-label="close" onClick={handleClose}>
        <MdClose />
      </CloseButton>
    </DialogHeaderWrapper>
  );
};

export default DialogHeader;
