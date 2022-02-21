import { useContext } from "react"
import styled from "styled-components"
import FAQ from "../../components/FAQ"
import Container from "../../components/layout/Container"
import SeoHome from "../../components/SEO/seoHome"
import { IntlContext } from "react-intl"
import {
  WORD_NavbarLink4,
  WORD_PricingExpert,
  WORD_PricingExpertText,
  WORD_PricingFreeText2,
  WORD_PricingFreeTitle,
  WORD_RecapAccCredits,
} from "../../Dictionary"

const ContainerDiv = styled.div`
  min-height: 80vh;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 3rem;
  @media (min-width: 48rem) {
    grid-template-columns: 1fr 1fr;
  }
  gap: 1rem;
`
const Card = styled.div`
  background-color: var(--surface3);
  min-width: 19rem;
  border: solid 1px var(--surface3);
  border-radius: 0.5rem;
  padding: 1rem;
  display: grid;
  gap: 2rem;
  padding-bottom: 3rem;
  justify-self: center;
`

const Title = styled.p`
  text-align: center;
  text-transform: uppercase;
`

const Price = styled.h4`
  text-align: center;
`

const Text = styled.p`
  text-align: center;
`
const FaqContainer = styled.div`
  margin-top: 3rem;
`
const index = () => {
  const { formatMessage } = useContext(IntlContext)
  return (
    <>
      <SeoHome title={formatMessage(WORD_NavbarLink4)} />
      <ContainerDiv>
        <Container>
          <CardContainer>
            <Card>
              <Title>
                <b>{formatMessage(WORD_PricingFreeTitle)}</b>
              </Title>
              <Price>{`${"0"}${"€"} / mo`}</Price>
              <div>
                <Text>{`30 ${formatMessage(WORD_RecapAccCredits)}`}</Text>
                <Text>{formatMessage(WORD_PricingFreeText2)}</Text>
              </div>
            </Card>
            <Card>
              <Title style={{ color: "var(--brand)" }}>
                <b>{formatMessage(WORD_PricingExpert)}</b>
              </Title>
              <Price
                style={{ color: "var(--brand)" }}
              >{`${"15"}${"€"} /mo`}</Price>
              <div>
                <Text>{formatMessage(WORD_PricingExpertText)}</Text>
              </div>
            </Card>
          </CardContainer>
          <FaqContainer></FaqContainer>
          <FAQ />
        </Container>
      </ContainerDiv>
    </>
  )
}
export default index
