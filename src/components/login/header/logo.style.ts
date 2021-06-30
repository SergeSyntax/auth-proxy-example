import { styled } from '@material-ui/core/styles';
import { Logo } from 'src/components/common/logo';

export const LogoHeaderLogin = styled(Logo)`
  && {
    font-size: 2.2em;
    color: transparent;
    background: linear-gradient(-225deg, #5b86e5 0%, #36d1dc 70%);
    background-clip: text;
    svg {
      color: #5fb8e6;
    }
  }
`;
