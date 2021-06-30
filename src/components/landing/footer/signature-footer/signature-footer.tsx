import React from 'react';
import { TextSignatureFooter } from './text-signature-footer';
import { WrapperSignatureFooter } from './wrapper-signature-footer.style';

export const FooterSignature: React.FC = () => {
  return (
    <WrapperSignatureFooter>
      <TextSignatureFooter />
    </WrapperSignatureFooter>
  );
};
