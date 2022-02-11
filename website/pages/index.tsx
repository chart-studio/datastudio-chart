import Container from "../components/layout/Container"
import Section1 from "../components/sections/Section1"
import styled from "styled-components"
import RecapAccount from "../components/elements/RecapAccount"
import { InterDocs, locale } from "../@types/interface"
import { useAuth } from "../hooks/useAuth"
import { useEffect, useState } from "react"
import SeoHome from "../components/SEO/seoHome"
import translatedWords from "../helpers/translatedWords"
import Section2 from "../components/sections/Section2"
import FAQ from "../components/FAQ"
import Sponsors from "../components/sections/Sponsors"

const HomePage = ({ locale }: { locale: locale }) => {
  const [connected, setConnected] = useState(false)
  const { user } = useAuth()
  const t = translatedWords(locale)
  useEffect(() => {
    if (user) {
      //console.log(user)
      setConnected(true)
    } else {
      setConnected(false)
    }
  }, [user])
  return (
    <>
      <SeoHome title={t.navbar.link1} />
      <Section1 t={t} />
      <RecapAccount onHomePage />
      <Section2 t={t} />
      <Sponsors />
      <Container>
        <FAQ locale={locale} />
      </Container>
    </>
  )
}

export default HomePage

export async function getStaticProps({ locale }: { locale: locale }) {
  return {
    props: { locale },
  }
}
