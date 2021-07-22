import styled from '@emotion/styled';
import { TextField } from '@material-ui/core';

export const FieldFormDeleteProject = styled(TextField)`
  .MuiFormHelperText-root {
    display: none;
  }
`;

FieldFormDeleteProject.defaultProps = { fullWidth: true };
