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

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'src/components/common/react-query-devtools';

const cache = createCache({ key: 'css' });
cache.compat = true;

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
          <ReactQueryDevtools />
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
