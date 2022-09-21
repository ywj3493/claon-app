import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import store from '../src/store';
import { Provider } from 'react-redux';
import NavBar from 'climbingweb/src/components/common/bottomNav/NavBar';
import navButtons from 'climbingweb/src/components/common/bottomNav/button';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <NavBar navButtons={navButtons} />
    </Provider>
  );
}

export default MyApp;
