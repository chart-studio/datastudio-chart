import { useContext } from "react"
import { IntlContext } from "react-intl"
import styled from "styled-components"
import { WORD_ModalAllcreditused } from "../../Dictionary"
const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`
const ModalCreditUsed = () => {
  const { formatMessage } = useContext(IntlContext)
  return (
    <Wrapper>
      <div style={{ position: "relative" }}>
        <strong>
          <p style={{ textAlign: "center", color: "var(--failure)" }}>
            {formatMessage(WORD_ModalAllcreditused)}
          </p>
        </strong>
      </div>
    </Wrapper>
  )
}

export default ModalCreditUsed
