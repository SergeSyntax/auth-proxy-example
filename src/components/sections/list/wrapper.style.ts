import { styled } from '@material-ui/core';

export const WrapperListSection = styled('div')`
  margin: 1rem;
  padding: 1rem 0;
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  overflow-x: auto;
  overflow-y: hidden;
  flex-direction: row;
  scrollbar-width: 1rem;
  scrollbar-color: rgba(253, 253, 253, 0.8) rgba(0, 0, 0, 0.1);
  &::-webkit-scrollbar {
    width: 1.2rem;
    height: 1.2 rem;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(253, 253, 253, 0.8);
    border-radius: 1rem;
    transition: all 0.3s;
    /* border: 3px solid rgba(0, 0, 0, 0.1); */
    :hover {
      background: #fdfdfd;
    }
  }
`;
