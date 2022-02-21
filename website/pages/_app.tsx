import { AppProps } from "next/dist/shared/lib/router/router"
import Navbar from "../components/elements/Navbar"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import { AuthProvider } from "../Context/Auth"
import Footer from "../components/elements/Footer"
import { IntlProvider } from "react-intl"
import { useRouter } from "next/router"
import French from "../locales/fr.json"
import "../styles/style.scss"
import { useMemo } from "react"
export default function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter() as { locale: "en" | "fr" }
  const messages = useMemo(() => {
    switch (locale) {
      case "fr":
        return French
      default:
        return
    }
  }, [locale])
  return (
    <>
      <ThemeProvider theme={{}}>
        <AuthProvider>
          <GlobalStyle />
          <IntlProvider
            locale={locale}
            defaultLocale="en"
            onError={() => null}
            messages={messages}
          >
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </IntlProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}
