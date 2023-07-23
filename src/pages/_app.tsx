import React from 'react';
import '../styles/globals.css';

import { store } from '../redux/store';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next/types';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // const user = useSelector((state: any) => state.user.user);
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     localStorage.setItem('user', JSON.stringify(user));
  //   }
  // }, [user]);
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
export default MyApp;
