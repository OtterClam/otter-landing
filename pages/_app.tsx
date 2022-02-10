import { ThemeProvider as MUIThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import Footer from 'src/common/Footer'
import Header from 'src/common/Header'
import 'src/i18n'
import { light } from 'src/themes'
import { GlobalStyle, theme } from 'src/themes/styled-components'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import '../styles/fonts.scss'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PVKBZHG' })
  }, [])
  return (
    <MUIThemeProvider theme={light}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </StyledThemeProvider>
    </MUIThemeProvider>
  )
}

export default MyApp
