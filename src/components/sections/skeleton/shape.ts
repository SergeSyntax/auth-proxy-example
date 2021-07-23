import { Card, styled } from '@material-ui/core';

export const ShapeSkeletonSection = styled(Card)`
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  background: #ebecf0;
  flex-shrink: 0;
  margin-left: 1rem;
  min-width: 25rem;
  height: 100%;
  padding: 1rem;

  :not(:last-child) {
    margin-right: 1rem;
  }
`;
