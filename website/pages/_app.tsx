import { AppProps } from "next/dist/shared/lib/router/router"
import Navbar from "../components/elements/Navbar"
import Container from "../components/layout/Container"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import "../styles/style.scss"
import { useEffect, useState } from "react"
import { AuthProvider } from "../Context/Auth"
import Footer from "../components/elements/Footer"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={{}}>
        <AuthProvider>
          <GlobalStyle />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}
