import { ThemeProvider as MUIThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from "src/common/Footer"
import type { AppProps } from 'next/app'

import 'src/i18n'
import { light } from 'src/themes'
import '../styles/fonts.scss';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'src/themes/styled-components';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <MUIThemeProvider theme={light}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <Component {...pageProps} />
        <Footer />
      </StyledThemeProvider>
    </MUIThemeProvider>
  )
}

export default MyApp
