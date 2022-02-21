import { useRouter } from "next/router"
import { Dispatch, SetStateAction, useContext, useState } from "react"
import { IntlContext } from "react-intl"
import styled from "styled-components"
import {
  WORD_ModalButtonCancel,
  WORD_ModalError,
  WORD_ModalSubsc,
  WORD_ModalSubscConfirm,
  WORD_ModalTryNext,
  WORD_ModalTryNextDoc,
} from "../../Dictionary"
import { routerDir } from "../../helpers/routerDir"
import { subscribe } from "../../helpers/subscribe"
import { useAuth } from "../../hooks/useAuth"

const Wrapper = styled.div`
  position: relative;
`
const LigneButton = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin: 0.5rem 0;
  button {
    height: 2.2rem;
    align-items: center;
    justify-content: center;
  }
`

const ButtonCancel = styled.button`
  width: 5rem;
`
const ButtonStart = styled.button`
  width: 6rem;
  background-color: var(--success);
  border-color: var(--success);
  &:hover {
    background-color: var(--secondary-fg);
    border-color: var(--secondary-fg);
  }
`
const ButtonWarn = styled.button`
  width: 6rem;
  background-color: var(--warning);
  border-color: var(--warning);
  &:hover {
    background-color: var(--secondary-fg);
    border-color: var(--secondary-fg);
  }
`
const ModalSubsc = ({
  selectedGraph,
  startFunc,
  cancelFunc,
  setOpenModal,
  selectedDoc,
  selectedGrapPrice,
  ...props
}: {
  selectedGraph: string
  startFunc: (graph: string) => void
  cancelFunc: () => void
  selectedDoc: string
  setOpenModal: Dispatch<SetStateAction<boolean>>
  selectedGrapPrice: string
}) => {
  const [openDocPage, setOpenDocPage] = useState(false)
  const { user, setUser } = useAuth()
  const router = useRouter()
  const { formatMessage } = useContext(IntlContext)
  return (
    <Wrapper {...props}>
      <p style={{ textAlign: "center" }}></p>
      <h6 style={{ textAlign: "center" }}>
        {!openDocPage
          ? `${formatMessage(WORD_ModalSubsc)}?`
          : `${formatMessage(WORD_ModalSubscConfirm)}`}
      </h6>
      <LigneButton>
        <ButtonCancel
          className="button br-4 br-4"
          onClick={() => {
            setOpenModal(false)
            cancelFunc()
          }}
        >
          {formatMessage(WORD_ModalButtonCancel)}
        </ButtonCancel>
        {user && selectedGraph !== "" && !openDocPage ? (
          <ButtonStart
            className="button br-4"
            onClick={async () => {
              try {
                //await tryGraph(user.uid, selectedGraph, setUser)
                await subscribe(user.uid, setUser, user.stripeId, router)
                setOpenDocPage(true)
              } catch (error) {
                console.log(error, "button try graph")
              }
            }}
          >
            {formatMessage(WORD_ModalTryNext)}
          </ButtonStart>
        ) : user && selectedGraph !== "" && openDocPage ? (
          <ButtonStart
            className="button br-4"
            onClick={() => {
              setOpenModal(false)
              routerDir(router, selectedDoc)
            }}
          >
            {formatMessage(WORD_ModalTryNextDoc)}
          </ButtonStart>
        ) : (
          <ButtonWarn
            className="button br-4"
            onClick={() => {
              router.reload()
            }}
          >
            {formatMessage(WORD_ModalError)}
          </ButtonWarn>
        )}
      </LigneButton>
    </Wrapper>
  )
}

ModalSubsc.defaultProps = {
  startFunc: (graph: string) => console.log("start Function", graph),
  cancelFunc: () => console.log("cancel Function"),
}

export default ModalSubsc
