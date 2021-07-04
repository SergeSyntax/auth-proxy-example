import React from 'react';
import { AppBarDashboard } from '../app-bar.styled';
import { Toolbar } from '@material-ui/core';
import ContainerHeaderDashboard from './container.styled';
import { LogoDashboard } from './logo.style';
import SearchDashboard from './search/search';
import { NavDashboard } from './nav/nav';
import { Create } from '../create';
import { UserOptions } from '../UserOptions';

const HeaderDashboard: React.FC = () => {
  return (
    <AppBarDashboard position="static" elevation={0} variant="outlined" color="default">
      <Toolbar>
        <ContainerHeaderDashboard>
          <LogoDashboard />
          <SearchDashboard />
          <NavDashboard />
          <Create />
          <UserOptions />
        </ContainerHeaderDashboard>
      </Toolbar>
    </AppBarDashboard>
  );
};

export default HeaderDashboard;
