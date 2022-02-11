import { useRouter } from "next/router"
import { Dispatch, SetStateAction, useState } from "react"
import styled from "styled-components"
import { routerDir } from "../../helpers/routerDir"
import { subscribeAdd } from "../../helpers/subscribeAdd"
import { useAuth } from "../../hooks/useAuth"
import en from "../../locales/en"
import fr from "../../locales/fr"
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
const ModalAdd = ({
  selectedGraph,
  startFunc,
  cancelFunc,
  setOpenModal,
  selectedDoc,
  ...props
}: {
  selectedGraph: string
  startFunc: (graph: string) => void
  cancelFunc: () => void
  selectedDoc: string
  setOpenModal: Dispatch<SetStateAction<boolean>>
}) => {
  const [openDocPage, setOpenDocPage] = useState(false)
  const { user, setUser } = useAuth()
  const router = useRouter()
  const { locale } = router
  const t = locale === "fr" ? fr : en
  console.log(selectedGraph, "selectedGraph")
  return (
    <Wrapper {...props}>
      <p style={{ textAlign: "center" }}></p>
      <h6 style={{ textAlign: "center" }}>
        {!openDocPage
          ? `${t.modalText.add} ${selectedGraph}`
          : `${t.modalText.subscConfirm}-${selectedGraph}`}
      </h6>
      <LigneButton>
        <ButtonCancel
          className="button br-4 br-4"
          onClick={() => {
            setOpenModal(false)
            cancelFunc()
          }}
        >
          {t.modalText.button.cancel}
        </ButtonCancel>
        {user && selectedGraph !== "" && !openDocPage ? (
          <ButtonStart
            className="button br-4"
            onClick={async () => {
              try {
                //await tryGraph(user.uid, selectedGraph, setUser)
                await subscribeAdd(user.uid, selectedGraph, setUser)
                setOpenDocPage(true)
              } catch (error) {
                console.log(error, "button try graph")
              }
            }}
          >
            {t.modalText.button.tryNextAdd}
          </ButtonStart>
        ) : user && selectedGraph !== "" && openDocPage ? (
          <ButtonStart
            className="button br-4"
            onClick={() => {
              setOpenModal(false)
              routerDir(router, selectedDoc)
            }}
          >
            {t.modalText.button.tryNextDocs}
          </ButtonStart>
        ) : (
          <ButtonWarn
            className="button br-4"
            onClick={() => {
              router.reload()
            }}
          >
            {t.modalText.button.error}
          </ButtonWarn>
        )}
      </LigneButton>
    </Wrapper>
  )
}

ModalAdd.defaultProps = {
  startFunc: (graph: string) => console.log("start Function", graph),
  cancelFunc: () => console.log("cancel Function"),
}

export default ModalAdd
