import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export const ApproveButtonPasswordRecovery = styled(Button)`
  && {
    flex: 1;
    background: #318bd3;
    padding: 1rem;
    ${({ theme }) => css`
      ${theme.breakpoints.down('sm')} {
        flex: 1;
        padding: 2rem;
      }
    `}
  }
`;
