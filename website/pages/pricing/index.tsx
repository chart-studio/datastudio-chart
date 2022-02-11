import styled from "styled-components"
import { locale } from "../../@types/interface"
import FAQ from "../../components/FAQ"
import Container from "../../components/layout/Container"
import SeoHome from "../../components/SEO/seoHome"
import translatedWords from "../../helpers/translatedWords"

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
const index = ({ locale }: { locale: locale }) => {
  const t = translatedWords(locale)
  return (
    <>
      <SeoHome title={t.navbar.link4} />
      <ContainerDiv>
        <Container>
          <CardContainer>
            <Card>
              <Title>
                <b>{t.pricing.blockPrice1.title}</b>
              </Title>
              <Price>{`${t.pricing.blockPrice1.price}${t.pricing.blockPrice2.currency} / mo`}</Price>
              <div>
                <Text>{t.pricing.blockPrice1.text1}</Text>
                <Text>{t.pricing.blockPrice1.text2}</Text>
              </div>
            </Card>
            <Card>
              <Title style={{ color: "var(--brand)" }}>
                <b>{t.pricing.blockPrice2.title}</b>
              </Title>
              <Price
                style={{ color: "var(--brand)" }}
              >{`${t.pricing.blockPrice2.price}${t.pricing.blockPrice2.currency} /mo`}</Price>
              <div>
                <Text>{t.pricing.blockPrice2.text1}</Text>
              </div>
            </Card>
          </CardContainer>
          <FaqContainer></FaqContainer>
          <FAQ locale={locale} />
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
