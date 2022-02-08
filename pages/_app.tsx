import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import type { AppProps } from 'next/app'

import 'src/i18n'
import { light } from 'src/themes'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={light}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
