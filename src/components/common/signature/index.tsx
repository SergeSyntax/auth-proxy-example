import React from 'react';
import { IconSignature } from './icon-signature.style';
import { TextSignature } from './text-signature.style';

export const Signature: React.FC = (props) => {
  return (
    <TextSignature {...props}>
      &copy; Sergway Khodyachikh <IconSignature />
    </TextSignature>
  );
};
