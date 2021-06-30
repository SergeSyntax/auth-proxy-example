import { styled } from '@material-ui/core/styles';

export const VideoBackgroundFeatures = styled('video')`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  overflow: hidden;
  object-fit: cover;
`;
