import { Container, styled } from '@material-ui/core';

const ContainerHeaderDashboard = styled(Container)`
  display: flex;
  align-items: center;
`;

ContainerHeaderDashboard.defaultProps = { maxWidth: 'lg' };

export default ContainerHeaderDashboard;
