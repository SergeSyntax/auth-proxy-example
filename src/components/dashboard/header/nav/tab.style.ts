import { styled } from '@material-ui/core/styles';
import { Tab as TabMUI } from '@material-ui/core';

export const TabDashboard = styled(TabMUI)`
  && {
    font-size: 1.2rem;
    min-width: 10rem;
    min-height: unset;
    line-height: 1.5;
    padding-top: 1rem;
    opacity: 0.9;
    &.MuiButtonBase-root > svg {
      font-size: 2.5rem;
    }
  }
`;
