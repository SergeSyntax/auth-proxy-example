import React from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import BoardWrapper from 'src/components/board/board-wrapper';

const Board: NextPage = () => {
  const router = useRouter();

  return <BoardWrapper>{router.query.slug}</BoardWrapper>;
};

export default Board;
