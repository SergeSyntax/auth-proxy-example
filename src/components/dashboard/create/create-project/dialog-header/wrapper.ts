import { styled } from '@material-ui/core/styles';
import { DialogTitle as MuiDialogTitle } from '@material-ui/core';

export const DialogHeaderWrapper = styled(MuiDialogTitle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.MuiDialogTitle-root {
    padding-right: 1.2rem;
  }
`;
