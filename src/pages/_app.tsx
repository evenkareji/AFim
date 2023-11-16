import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { NextPage } from 'next/types';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <Head>
        {/* ここにはページ特有のメタデータのみを残します */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        {/* グローバルスタイルシートのリンクは削除されています */}
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}

export default MyApp;
