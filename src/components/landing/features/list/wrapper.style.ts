import { Container } from '@material-ui/core';
import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';

export const WrapperListFeature = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${theme.breakpoints.down('md')} {
      flex-direction: column;
      margin: 10rem 0;
    }
  `}
`;
