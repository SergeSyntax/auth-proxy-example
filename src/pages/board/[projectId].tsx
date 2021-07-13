import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { LayoutBoard } from 'src/components/board/layout';
import { useProject } from 'src/hooks/projects/useProject';
import { WrapperBoard } from 'src/components/board/wrapper';
import { HeaderBoard } from 'src/components/board/header/header';

interface Props {
  projectId: string;
}

const Board: NextPage<Props> = ({ projectId }) => {
  const { data } = useProject(projectId);

  return (
    <LayoutBoard>
      <WrapperBoard>
        <HeaderBoard />

        {data?.title}
      </WrapperBoard>
    </LayoutBoard>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return { props: { projectId: query.projectId } };
};
export default Board;
