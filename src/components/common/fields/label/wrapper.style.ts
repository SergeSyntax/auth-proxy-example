import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';

export const WrapperLabel = styled('label')`
  ${({ theme }) => css`
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 2rem;
    padding: 0.5rem;
    color: ${theme.palette.grey[600]};
  `}
`;
