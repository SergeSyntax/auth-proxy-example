import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import BoardWrapper from 'src/components/board/board-wrapper';
import { useProject } from 'src/hooks/projects/useProject';

interface Props {
  projectId: string;
}

const Board: NextPage<Props> = ({ projectId }) => {
  const { data } = useProject(projectId);

  return <BoardWrapper>{data?.title}</BoardWrapper>;
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return { props: { projectId: query.projectId } };
};
export default Board;
