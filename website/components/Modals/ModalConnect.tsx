import { useRouter } from "next/router"
import { Dispatch, SetStateAction, useContext } from "react"
import { IntlContext } from "react-intl"
import styled from "styled-components"
import { locale } from "../../@types/interface"
import { WORD_ModalConnectTitle } from "../../Dictionary"
import { signIn } from "../../helpers/signIn"
import { useAuth } from "../../hooks/useAuth"
import ButtonConnectGoogle from "../elements/ButtonConnectGoogle"
const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`
const ModalConnect = ({
  setOpenModal,
}: {
  setOpenModal: Dispatch<SetStateAction<boolean>>
}) => {
  const { setUser, user } = useAuth()
  const { locale } = useRouter() as { locale: locale }
  const { formatMessage } = useContext(IntlContext)
  return (
    <Wrapper>
      <div style={{ position: "relative" }}>
        <strong>
          <p style={{ textAlign: "center", color: "var(--failure)" }}>
            {formatMessage(WORD_ModalConnectTitle)}
          </p>
        </strong>
      </div>
      <ButtonConnectGoogle
        connected={user ? true : false}
        disabled={user ? true : false}
        onClick={() => {
          setOpenModal(false)
          signIn(locale, setUser)
        }}
      />
    </Wrapper>
  )
}

export default ModalConnect
