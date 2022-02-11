import React from "react"
import styled from "styled-components"
import { locale } from "../../@types/interface"
import FAQ from "../../components/FAQ"
import Container from "../../components/layout/Container"
import SeoHome from "../../components/SEO/seoHome"
import translatedWords from "../../helpers/translatedWords"

const ContainerDiv = styled.div`
  min-height: 80vh;
`
const index = ({ locale }: { locale: locale }) => {
  const t = translatedWords(locale)
  return (
    <>
      <SeoHome title={t.navbar.link2} />
      <ContainerDiv>
        <Container>
          <FAQ locale={locale} all />
        </Container>
      </ContainerDiv>
    </>
  )
}

export default index

export async function getStaticProps({ locale }: { locale: locale }) {
  return {
    props: { locale },
  }
}
