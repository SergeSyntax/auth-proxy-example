import { Card, Grid, styled } from '@material-ui/core';
import React from 'react';

interface Props {}

export const WrapperSectionsBoard = styled('div')`
  flex: 1;
  position: relative;
  padding: 1rem;
`;

const ScrollWrapperSectionsBoard = styled('div')`
  margin: 1rem;
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: row;

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
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(253, 253, 253, 0.8);
    border-radius: 10rem;
    transition: all 0.3s;
    /* border: 3px solid rgba(0, 0, 0, 0.1); */
    :hover {
      background: #fdfdfd;
    }
  }
`;

const test = new Array(50).fill('test');

const WrapperSection = styled(Card)`
  background: #ebecf0;
  max-height: 96%;
  flex-shrink: 0;
  margin: 1rem 0 0;
  min-width: 27rem;

  :not(:last-child) {
    margin-right: 1rem;
  }
`;

const Section: React.FC<{ title: string }> = ({ title }) => (
  <WrapperSection>{title}</WrapperSection>
);

export const SectionsBoard: React.FC<Props> = (props) => {
  return (
    <WrapperSectionsBoard>
      <ScrollWrapperSectionsBoard>
        {test.map((title, index) => (
          <Section key={index} title={title} />
        ))}
      </ScrollWrapperSectionsBoard>
    </WrapperSectionsBoard>
  );
};
