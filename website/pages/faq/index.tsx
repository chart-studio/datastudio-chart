import React, { useContext } from "react"
import styled from "styled-components"
import { locale } from "../../@types/interface"
import FAQ from "../../components/FAQ"
import Container from "../../components/layout/Container"
import SeoHome from "../../components/SEO/seoHome"
import { WORD_NavbarLink2 } from "../../Dictionary"
import translatedWords from "../../helpers/translatedWords"
import { IntlContext } from "react-intl"

const ContainerDiv = styled.div`
  min-height: 80vh;
`
const index = () => {
  const { formatMessage } = useContext(IntlContext)
  return (
    <>
      <SeoHome title={formatMessage(WORD_NavbarLink2)} />
      <ContainerDiv>
        <Container>
          <FAQ all />
        </Container>
      </ContainerDiv>
    </>
  )
}

export default index
