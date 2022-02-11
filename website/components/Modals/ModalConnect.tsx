import { useRouter } from "next/router"
import styled from "styled-components"
import { locale } from "../../@types/interface"
import { signIn } from "../../helpers/signIn"
import translatedWords from "../../helpers/translatedWords"
import { useAuth } from "../../hooks/useAuth"
import en from "../../locales/en"
import fr from "../../locales/fr"
import Google from "../icon/Google"
const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
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
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

const ModalConnect = ({ ...props }: { props?: { [x: string]: any } }) => {
  const { setUser } = useAuth()
  const router = useRouter()
  const { locale } = router as { locale: locale }
  const t = translatedWords(locale)
  return (
    <Wrapper>
      <div style={{ position: "relative" }}>
        <strong>
          <p style={{ textAlign: "center", color: "var(--failure)" }}>
            {t.modalText.connect}
          </p>
        </strong>
      </div>
      <ButtonWrapper>
        <Button onClick={() => signIn(locale, setUser)}>
          <Google />
          {t.button.account}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default ModalConnect
