import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import type { AppProps } from 'next/app';

import { CssBaseline, NoSsr } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import createCache from '@emotion/cache';
import { CacheProvider, Global } from '@emotion/react';

import { theme } from '../styles/theme';
import { global } from '../styles/global';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AlertContextProvider } from 'src/components/alert/provider';

const cache = createCache({ key: 'css' });
cache.compat = true;

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CacheProvider value={cache}>
          <Head>
            {/* VIEWPORT */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <ThemeProvider theme={theme}>
            <Global styles={global} />
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <AlertContextProvider>
              <Component {...pageProps} />
            </AlertContextProvider>
          </ThemeProvider>
        </CacheProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};

export default MyApp;
