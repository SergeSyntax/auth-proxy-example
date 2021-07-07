import React, { Fragment } from 'react';
import Background from './background';

const BoardWrapper: React.FC = props => {
  return (
    <Fragment>
      <Background />
      {props.children}
    </Fragment>
  );
};

export default BoardWrapper;
