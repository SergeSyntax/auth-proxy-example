import { styled } from '@material-ui/core/styles';
import { moveInLeft } from '../animations/move-in-left.keyframe';

export const MainTitleHeaderLanding = styled('span')`
  display: inline-block;
  animation: ${moveInLeft} 1s ease-out;
`;
