import { Alert, IconButton, Snackbar, SnackbarProps } from '@material-ui/core';
import React from 'react';
import { GoX } from 'react-icons/go';
import { alertClear } from './actions';
import { StateAlert } from './types';
import { UndoButton } from './undo-button.style';

export const SnackbarAlert: React.FC<StateAlert> = ({ error, message, stale }) => {
  const commonProps: SnackbarProps = {
    open: !stale,
    onClose: alertClear,
    autoHideDuration: error ? 6000 : 1000
  };

  return error ? (
    <Snackbar {...commonProps}>
      <Alert variant="filled" onClose={alertClear} severity="error">
        {message}
      </Alert>
    </Snackbar>
  ) : (
    <Snackbar
      {...commonProps}
      message={message}
      action={
        <React.Fragment>
          <UndoButton color="error" size="small" onClick={alertClear}>
            UNDO
          </UndoButton>
          <IconButton size="small" aria-label="close" color="inherit" onClick={alertClear}>
            <GoX />
          </IconButton>
        </React.Fragment>
      }
    />
  );
};
