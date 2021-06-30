import { OpenAuth } from 'src/components/common/open-auth';
import React from 'react';
import { WrapperDocumentLogin } from './wrapper.style';
import { LoginDocumentForm } from './form';

export const DocumentLogin: React.FC = () => {
  return (
    <WrapperDocumentLogin>
      {/* Open Authentication */}
      <OpenAuth />
      {/* Forum */}
      <LoginDocumentForm />
    </WrapperDocumentLogin>
  );
};
