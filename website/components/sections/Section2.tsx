import styled from "styled-components"
import Container from "../layout/Container"
import Google from "../icon/Google"
import BarChart from "../icon/BarChart"
import { IntlContext } from "react-intl"
import Link from "next/link"
import LinkHome from "../icon/LinkHome"
import DataStudioIcon from "../icon/DataStudio"
import { useContext } from "react"
import {
  WORD_homeExplainButton2,
  WORD_homeExplainButton3,
  WORD_homeExplainButton4,
  WORD_homeExplainSubTitle1,
  WORD_homeExplainSubTitle2,
  WORD_homeExplainSubTitle3,
  WORD_homeExplainSubTitle4,
  WORD_homeExplainText1,
  WORD_homeExplainText2,
  WORD_homeExplainText3,
  WORD_homeExplainText4,
  WORD_homeExplainText4KnowMore,
  WORD_homeExplainTitle,
} from "../../Dictionary"
import ButtonConnectGoogle from "../elements/ButtonConnectGoogle"
import { useAuth } from "../../hooks/useAuth"
import { signIn } from "../../helpers/signIn"
import { useRouter } from "next/router"
import ButtonHomeWrapper from "../elements/ButtonHomeWrapper"

const Section = styled.section`
  --gap: 2rem;
  --size: 300px;
  display: grid;
  gap: var(--gap);
  text-align: center;
  margin-bottom: 3rem;
  .react-multi-carousel-list {
    padding-top: 1rem;
    justify-content: center;
  }
  .react-multi-carousel-track {
    gap: calc(var(--gap) / 2);
  }
`
const CardHowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  p {
    text-align: left;
  }
  h6 {
    margin-bottom: 1rem;
  }
  @media (min-width: 48rem) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const CardHow = styled.div`
  position: relative;
  border: solid 1px var(--surface3);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  padding: 0.5rem 0;
  svg {
    margin: 0;
  }
`

const Space = styled.div`
  margin-top: auto;
`

const Section2 = () => {
  const { formatMessage } = useContext(IntlContext)
  const { locale } = useRouter()
  const { user, setUser } = useAuth()
  return (
    <Container>
      <Section>
        <h2>{formatMessage(WORD_homeExplainTitle)}</h2>
        <CardHowContainer>
          <CardHow>
            <LogoDiv>
              <Google width="2rem" height="2rem" />
            </LogoDiv>

            <header>
              <h6>{formatMessage(WORD_homeExplainSubTitle1)}</h6>
            </header>
            <p>{formatMessage(WORD_homeExplainText1)}</p>
            <Space />
            <ButtonConnectGoogle
              connected={user ? true : false}
              disabled={user ? true : false}
              onClick={() => signIn(locale, setUser)}
            />
          </CardHow>
          <CardHow>
            <LogoDiv>
              <BarChart width="1.6rem" height="1.6rem" />
            </LogoDiv>
            <header>
              <h6>{formatMessage(WORD_homeExplainSubTitle2)}</h6>
            </header>
            <p>{formatMessage(WORD_homeExplainText2)}</p>
            <Space />
            <Link href="/library">
              <a>
                <ButtonHomeWrapper>
                  {formatMessage(WORD_homeExplainButton2)}
                </ButtonHomeWrapper>
              </a>
            </Link>
          </CardHow>
          <CardHow>
            <LogoDiv>
              <LinkHome width="1.4rem" height="1.4rem" />
            </LogoDiv>

            <header>
              <h6>{formatMessage(WORD_homeExplainSubTitle3)}</h6>
            </header>
            <p>{formatMessage(WORD_homeExplainText3)}</p>
            <Space />
            <Link href="/library">
              <a>
                <ButtonHomeWrapper>
                  {formatMessage(WORD_homeExplainButton3)}
                </ButtonHomeWrapper>
              </a>
            </Link>
          </CardHow>
          <CardHow>
            <LogoDiv>
              <DataStudioIcon width="1.6rem" height="1.6rem" />
            </LogoDiv>
            <header>
              <h6>{formatMessage(WORD_homeExplainSubTitle4)}</h6>
            </header>
            <p>{formatMessage(WORD_homeExplainText4)}</p>
            <Space />
            <a
              href="https://developers.google.com/datastudio/visualization/load-viz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonHomeWrapper>
                {formatMessage(WORD_homeExplainButton4)}
              </ButtonHomeWrapper>
            </a>
          </CardHow>
        </CardHowContainer>
      </Section>
    </Container>
  )
}

export default Section2
