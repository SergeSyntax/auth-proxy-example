import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';

export const WrapperButtonsHeaderLanding = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    ${theme.breakpoints.down('sm')} {
      flex-direction: column;
    }
  `}
`;
