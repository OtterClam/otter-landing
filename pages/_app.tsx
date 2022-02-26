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
    const incompleteImages = Array.from(document.images).filter(image => !image.complete);
    let incompleteCount = incompleteImages.length;
    const lazyDisableLoading = () => {
      setTimeout(() => setLoading(false), 500);
    }
    if (!incompleteCount) {
      lazyDisableLoading();
      return;
    }
    incompleteImages.map((image) => {
      image.addEventListener('load', (e) => {
        incompleteCount -= 1
        if (incompleteCount <= 0) {
          lazyDisableLoading();
        }
      });
    }, false)
  }, [setLoading]);
  return (
    <MUIThemeProvider theme={light}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <LoadingScreen show={loading} />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </StyledThemeProvider>
    </MUIThemeProvider>
  );
}

export default MyApp;
