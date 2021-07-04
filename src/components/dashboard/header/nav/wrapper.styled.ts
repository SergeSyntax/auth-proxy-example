import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';
import { Tabs } from '@material-ui/core';

export const WrapperNavDashboard = styled(Tabs)`
  && {
    margin: 0rem auto 0 auto;

    ${({ theme }) => css`
      ${theme.breakpoints.down('sm')} {
        display: none;
      }
    `}
  }
`;
