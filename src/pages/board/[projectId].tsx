import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { LayoutBoard } from 'src/components/board/layout';
import { WrapperBoard } from 'src/components/board/wrapper';
import { HeaderBoard } from 'src/components/board/header/header';
import { ListSection } from 'src/components/sections';
import { ContentBoard } from 'src/components/board/content.style';
import { SEO } from 'src/components/common/seo';

interface Props {
  projectId: string;
}

const Board: NextPage<Props> = ({ projectId }) => {
  return (
    <LayoutBoard>
      <SEO
        title="Board | Assign"
        description="Assign is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog."
      />
      <WrapperBoard>
        <HeaderBoard projectId={projectId} />
        <ContentBoard>
          <ListSection projectId={projectId} />
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
