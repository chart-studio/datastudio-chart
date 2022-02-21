import Container from "../components/layout/Container"
import Section1 from "../components/sections/Section1"
import { useAuth } from "../hooks/useAuth"
import { useContext, useEffect, useState } from "react"
import SeoHome from "../components/SEO/seoHome"
import Section2 from "../components/sections/Section2"
import FAQ from "../components/FAQ"
import Sponsors from "../components/sections/Sponsors"
import { IntlContext } from "react-intl"
import { WORD_NavbarLink1 } from "../Dictionary"

const HomePage = () => {
  const [connected, setConnected] = useState(false)
  const { formatMessage } = useContext(IntlContext)
  const { user } = useAuth()
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
      <SeoHome title={formatMessage(WORD_NavbarLink1)} />
      <Section1 />
      {/* <RecapAccount onHomePage /> */}
      <Section2 />
      {/* <Sponsors /> */}
      <Container>
        <FAQ />
      </Container>
    </>
  )
}

export default HomePage
