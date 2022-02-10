import { ThemeProvider as MUIThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Footer from 'src/common/Footer'
import Header from 'src/common/Header'
import 'src/i18n'
import { light } from 'src/themes'
import { GlobalStyle, theme } from 'src/themes/styled-components'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import '../styles/fonts.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `<!-- Google Tag Manager -->
    <script>
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-PVKBZHG');
    </script>
    <!-- End Google Tag Manager -->`,
        }}
      />
      <MUIThemeProvider theme={light}>
        <StyledThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </StyledThemeProvider>
      </MUIThemeProvider>
    </>
  )
}

export default MyApp
