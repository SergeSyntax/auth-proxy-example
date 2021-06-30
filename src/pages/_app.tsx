import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import type { AppProps } from 'next/app';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import createCache from '@emotion/cache';
import { CacheProvider, Global } from '@emotion/react';

import { theme } from '../styles/theme';
import { global } from '../styles/global';

const cache = createCache({ key: 'css' });
cache.compat = true;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <Head>
        {/* VIEWPORT */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
