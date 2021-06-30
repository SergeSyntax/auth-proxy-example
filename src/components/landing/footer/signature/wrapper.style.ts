import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';

export const WrapperSignatureFooter = styled('div')`
  ${({ theme }) => css`
    background-color: #151515;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    ${theme.breakpoints.down('md')} {
    }
  `}
`;
