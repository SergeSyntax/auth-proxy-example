import { styled } from '@material-ui/core/styles';
import { Menu } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const CreateMenu = styled(Menu)`
  & .MuiPaper-root.MuiPopover-paper.MuiPopover-paper {
    min-width: 22rem;
    top: 7rem !important;
  }
  & .MuiMenuItem-root {
    opacity: 0.9;
    font-size: 1.68rem;
    font-weight: 800;
    color: ${grey['700']};
    padding: 1rem 1.4rem;
    svg {
      font-size: 1.5em;
      margin-right: 1.4rem;
    }
  }
`;
