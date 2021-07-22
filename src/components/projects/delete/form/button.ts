import { css } from '@emotion/react';
import { styled } from '@material-ui/core';
import SubmitButton from 'src/components/common/button/submit/submit';

export const ButtonFormDeleteProject = styled(SubmitButton)`
  ${({ theme }) => css`
    && {
      transition: all 0.2s;
      color: #fff;
      font-size: 1.4rem;
      &,
      &:hover {
        background: ${theme.palette.error.main};
      }

      &:disabled {
        background: ${theme.palette.grey[300]};
      }
    }
  `}
`;
