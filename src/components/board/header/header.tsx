import { AppBar, Grid, styled, Toolbar } from '@material-ui/core';
import React from 'react';
import { Logo } from 'src/components/common/logo';
import { UserOptions } from 'src/components/dashboard/header/UserOptions';
import { LocationBoard } from '../location';

interface Props {}

const AppBarBoard = styled(AppBar)`
  background: hsla(0, 0%, 100%, 0.24);
  padding-top: 0.6rem;
`;

const RowAppBarBoard = styled(Grid)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoBoard = styled(Logo)`
  font-size: 2.9rem;
`;

export const HeaderBoard: React.FC<Props> = (props) => {
  return (
    <AppBarBoard position="static">
      <Grid component={Toolbar} container direction="column">
        <RowAppBarBoard>
          <LogoBoard />
          <UserOptions />
        </RowAppBarBoard>
        <RowAppBarBoard>
          <LocationBoard projectId="etst" />
          <div></div>
        </RowAppBarBoard>
      </Grid>
    </AppBarBoard>
  );
};
