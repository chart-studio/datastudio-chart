import { User } from "firebase/auth"
import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"
import { UserData } from "../../@types/interface"
import { routerDir } from "../../helpers/routerDir"
import { signIn } from "../../helpers/signIn"
import { useAuth } from "../../hooks/useAuth"
import fr from "../../locales/fr"
import Google from "../icon/Google"

const BlockRecap = styled.div`
  position: sticky;
  top: 4rem;
  backdrop-filter: blur(20px);
  //background-color: var(--surface2);
  padding: 1rem;
  z-index: 1;
  margin: 0 0 2rem 0;
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
const RecapAccount = ({
  t,
  connected,
  user,
}: {
  t: typeof fr
  connected: boolean
  user: (UserData & User) | null
}) => {
  const router = useRouter()
  const { locale } = router
  const { setUser } = useAuth()
  return (
    <BlockRecap>
      {connected ? (
        <ConnectContainer>
          <EssayWrapper>
            <Boule theme={{ val: "essay" }} />
            <Text>
              {user && user.trygraph.length !== 0
                ? user.trygraph.length * 10
                : "00"}{" "}
              <span>/ 30 {t.recap.credit}</span>
            </Text>
          </EssayWrapper>
          <SubsWrapper>
            <Boule theme={{ val: "subsc" }} />
            <Text>
              {user ? user.subsc.length : 0} <span>{t.recap.subsc}</span>
            </Text>
          </SubsWrapper>
        </ConnectContainer>
      ) : (
        <Button onClick={() => signIn(locale, setUser)}>
          <Google />
          {t.button.account}
        </Button>
      )}
    </BlockRecap>
  )
}

export default RecapAccount
