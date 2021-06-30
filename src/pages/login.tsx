import { DocumentLogin } from 'src/components/login/document-login';
import { HeaderLogin } from 'src/components/login/header';
import { WrapperLogin } from 'src/components/login/wrapper.style';
import { NextPage } from 'next';
import React from 'react';
import { SEO } from 'src/components/common/seo';
import { AlternativeLogin } from 'src/components/login/alternative';

const Login: NextPage = () => (
  <WrapperLogin>
    <SEO title="Sign In" description="Sign into Assign." />
    <HeaderLogin />
    <DocumentLogin />
    <AlternativeLogin />
  </WrapperLogin>
);

export default Login;
