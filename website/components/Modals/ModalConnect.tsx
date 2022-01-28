import { useRouter } from "next/router"
import styled from "styled-components"
import en from "../../locales/en"
import fr from "../../locales/fr"
const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`
const ModalConnect = ({ ...props }: { props?: { [x: string]: any } }) => {
  const router = useRouter()
  const { locale } = router
  const t = locale === "fr" ? fr : en
  return (
    <Wrapper>
      {/* <p style={{ textAlign: "center" }}>Ce titre est déja utilisé.</p> */}
      <div style={{ position: "relative" }}>
        <strong>
          <p style={{ textAlign: "center", color: "var(--failure)" }}>
            {t.modalText.connect}
          </p>
        </strong>
      </div>
    </Wrapper>
  )
}

export default ModalConnect
