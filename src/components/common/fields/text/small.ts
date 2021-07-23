import { styled } from '@material-ui/core';
import { TextField } from './text';

export const SmallTextField = styled(TextField)`
  && {
    .MuiInputBase-input {
      padding-bottom: 1rem;
      padding-top: 1rem;
      font-size: 1.6rem;
    }
  }
`;
