import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import 'src/i18n'
import { light } from 'src/themes'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side')
  //   if (jssStyles) {
  //     jssStyles.parentElement!.removeChild(jssStyles)
  //   }
  // }, [])

  return (
    <ThemeProvider theme={light}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
