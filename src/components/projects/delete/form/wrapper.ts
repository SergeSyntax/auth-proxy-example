import { styled } from '@material-ui/core';
import { Form } from 'formik';

export const WrapperFormDeleteProject = styled(Form)`
  background: #f6f8fa;
  padding: ${({ theme }) => theme.spacing(2)};
`;
