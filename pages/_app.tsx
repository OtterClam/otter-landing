import { ThemeProvider as MUIThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import type { AppProps } from 'next/app'

import 'src/i18n'
import { light } from 'src/themes'
import '../styles/globals.scss'

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from 'src/themes/styled-components';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <MUIThemeProvider theme={light}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </StyledThemeProvider>
    </MUIThemeProvider>
  )
}

export default MyApp
