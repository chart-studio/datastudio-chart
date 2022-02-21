import { useRouter } from "next/router"
import React, { useContext } from "react"
import styled from "styled-components"
import { signIn } from "../../helpers/signIn"
import { useAuth } from "../../hooks/useAuth"
import Google from "../icon/Google"
import { IntlContext } from "react-intl"
import {
  WORD_RecapAccButtonConnectGoogle,
  WORD_RecapAccCredits,
  WORD_Subscriptions,
} from "../../Dictionary"

const BlockRecap = styled.div`
  //position: sticky;
  //top: 4rem;
  backdrop-filter: blur(20px);
  //background-color: var(--surface2);
  padding: 1rem;
  z-index: 1;
  margin: ${props => (props.theme.onHomePage ? "0 0 11rem 0" : "0 0 3rem 0")};
  //margin: 0 0 3rem 0;
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  background-color: var(--brand);
  border: none;
  border-radius: 0.25rem;
  width: 15rem;
  outline: none;
  &:hover {
    opacity: 0.8;
  }
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.9px;
`

const ConnectContainer = styled.div`
  display: flex;
  width: 16rem;
  justify-content: space-between;
`
const EssayWrapper = styled.div`
  display: flex;
  align-items: center;
`
const SubsWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Boule = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-color: ${props =>
    props.theme.val === "essay" ? "var(--warning)" : "var(--secondary-fg)"};
`
const Text = styled.div`
  margin-left: 0.5rem;
  span {
    color: var(--text2);
  }
`
const RecapAccount = ({ onHomePage }: { onHomePage?: boolean }) => {
  const { formatMessage } = useContext(IntlContext)
  const router = useRouter()
  const { locale } = router
  const { user, setUser } = useAuth()
  //useEffect(() => {}, [user])
  return (
    <BlockRecap theme={{ onHomePage }}>
      {user ? (
        <ConnectContainer>
          <EssayWrapper>
            <Boule theme={{ val: "essay" }} />
            <Text>
              {user && user.trygraph?.length !== 0
                ? user.trygraph.length * 10
                : "00"}{" "}
              <span>/ 30 {formatMessage(WORD_RecapAccCredits)}</span>
            </Text>
          </EssayWrapper>
          <SubsWrapper>
            <Boule theme={{ val: "subsc" }} />
            <Text>
              {user ? user.subsc.length : 0}{" "}
              <span>{formatMessage(WORD_Subscriptions)}</span>
            </Text>
          </SubsWrapper>
        </ConnectContainer>
      ) : (
        <Button onClick={() => signIn(locale, setUser)}>
          <Google />
          {formatMessage(WORD_RecapAccButtonConnectGoogle)}
        </Button>
      )}
    </BlockRecap>
  )
}

export default RecapAccount
