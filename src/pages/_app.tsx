import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { NextPage } from 'next/types';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <Head>
        {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <link
          rel="stylesheet"
          href="https://unpkg.com/modern-css-reset/dist/reset.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kameron:wght@400;700&family=Noto+Sans+JP:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Sharp|Material+Icons+Two+Tone"
          rel="stylesheet"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}
export default MyApp;
