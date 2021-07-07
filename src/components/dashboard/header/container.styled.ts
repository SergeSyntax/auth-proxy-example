import { Container, styled } from '@material-ui/core';

export const ContainerHeaderDashboard = styled(Container)`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
`;
