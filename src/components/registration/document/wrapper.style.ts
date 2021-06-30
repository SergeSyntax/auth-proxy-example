import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

export const WrapperDocumentRegistration = styled(Container)`
  ${({ theme }) => css`
    padding: 2rem 4rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: ${theme.shadows[5]};
  `}
`;

WrapperDocumentRegistration.defaultProps = { maxWidth: 'xs' };
