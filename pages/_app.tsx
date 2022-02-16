import { ThemeProvider as MUIThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module';
import Footer from 'src/common/Footer';
import Header from 'src/common/Header';
import LoadingScreen from 'src/common/LoadingScreen';
import 'src/i18n';
import { light } from 'src/themes';
import { GlobalStyle, theme } from 'src/themes/styled-components';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import '../styles/fonts.scss';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PVKBZHG' });
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadCallback = () => {
      Promise.all(
        Array.from(document.images).map((img) => {
          img.onload = Promise.resolve;
        })
      ).then(() => {
        setLoading(false);
      });
    };
    window.addEventListener('load', loadCallback);
    return () => {
      window.removeEventListener('load', loadCallback);
    };
  }, [setLoading]);
  return (
    <MUIThemeProvider theme={light}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <LoadingScreen show={loading} />
      </StyledThemeProvider>
    </MUIThemeProvider>
  );
}

export default MyApp;
