import { useContext } from "react"
import { IntlContext } from "react-intl"
import styled from "styled-components"
import {
  WORD_homeSection1Stick1,
  WORD_homeSection1Stick2,
  WORD_homeSection1Stick3,
  WORD_homeSection1Stick4,
  WORD_homeSection1Stick5,
  WORD_homeSection1Stick5Button,
  WORD_homeTitle,
} from "../../Dictionary"
import ButtonJoinWrapper from "../elements/ButtonJoinWrapper"
import CheckMark_icon from "../icon/CheckMark_icon"
import Slack from "../icon/Slack"

const Section = styled.section`
  height: 60vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  h1 {
    margin: auto auto auto auto;
  }
  & > div > span {
    margin-bottom: 2rem;
  }
  li {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    > span {
      margin-left: 0.8rem;
    }
    margin: 0.5rem 0;
  }
  ul {
    /* padding-left: 2rem; */
    @media (max-width: 48rem) {
      & {
        padding: 0;
      }
    }
  }
`
const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem 0.8rem 5rem 0.8rem;
`

const Div = styled.div`
  width: fit-content;
  text-align: start;
`
const SpanJoin = styled.span`
  margin-left: 0.25rem;
`

const Section1 = () => {
  const { formatMessage } = useContext(IntlContext)
  return (
    <Section>
      <DivContainer>
        <h1>{formatMessage(WORD_homeTitle)}</h1>
        <span>{formatMessage(WORD_homeSection1Stick4)}</span>
        <Div>
          <ul>
            <li>
              <CheckMark_icon />
              <span>{formatMessage(WORD_homeSection1Stick1)}</span>
            </li>
            <li>
              <CheckMark_icon />
              <span>{formatMessage(WORD_homeSection1Stick2)}</span>
            </li>
            <li>
              <CheckMark_icon />
              <span>{formatMessage(WORD_homeSection1Stick3)}</span>
            </li>
            <li>
              <CheckMark_icon />
              <span>{formatMessage(WORD_homeSection1Stick5)}</span>
              <a
                href="https://join.slack.com/t/chartstudio/shared_invite/zt-13z6rsc39-5OZWm~YDUU37GZb6Kl_klA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonJoinWrapper>
                  <Slack width="1rem" height="1rem" />
                  <SpanJoin>
                    {formatMessage(WORD_homeSection1Stick5Button)}
                  </SpanJoin>
                </ButtonJoinWrapper>
              </a>
            </li>
          </ul>
        </Div>
      </DivContainer>
    </Section>
  )
}

export default Section1
