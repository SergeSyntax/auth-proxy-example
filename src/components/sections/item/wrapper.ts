import { Card, styled } from '@material-ui/core';

export const WrapperItemSection = styled(Card)`
  background: #ebecf0;
  flex-shrink: 0;
  margin-left: 1rem;
  min-width: 25rem;
  height: 100%;

  :not(:last-child) {
    margin-right: 1rem;
  }
`;
