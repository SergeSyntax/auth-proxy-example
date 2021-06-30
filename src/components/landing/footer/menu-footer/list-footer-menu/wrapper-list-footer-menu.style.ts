import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';

export const WrapperMenuListFooter = styled('ul')`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    justify-content: space-evenly;

    ${theme.breakpoints.down('md')} {
      margin-top: 3rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `}
`;
