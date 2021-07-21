import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { LayoutBoard } from 'src/components/board/layout';
import { WrapperBoard } from 'src/components/board/wrapper';
import { HeaderBoard } from 'src/components/board/header/header';
import { SectionsBoard } from 'src/components/sections';
import { ContentBoard } from 'src/components/board/content.style';

interface Props {
  projectId: string;
}

const Board: NextPage<Props> = ({ projectId }) => {
  return (
    <LayoutBoard>
      <WrapperBoard>
        <HeaderBoard />
        <ContentBoard>
          <SectionsBoard projectId={projectId} />
        </ContentBoard>
      </WrapperBoard>
    </LayoutBoard>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return { props: { projectId: query.projectId } };
};
export default Board;
