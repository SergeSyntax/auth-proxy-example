import React from 'react';

import { VideoBackgroundFeatures } from './video-background-features.style';
import { WrapperFeatures } from './wrapper-features.style';
import { ListFeature } from './list-feature';

export const Features: React.FC = () => {
  return (
    <WrapperFeatures>
      <VideoBackgroundFeatures src="/video/features-video-background.mp4" autoPlay loop muted />
      <ListFeature />
    </WrapperFeatures>
  );
};
