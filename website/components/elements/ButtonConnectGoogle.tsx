import { ButtonHTMLAttributes, FC, useContext } from "react"
import { IntlContext } from "react-intl"
import styled from "styled-components"
import { WORD_RecapAccButtonConnectGoogle } from "../../Dictionary"
import Google from "../icon/Google"

interface ButtonAttr extends ButtonHTMLAttributes<HTMLButtonElement> {
  connected: boolean
}

const Button = styled.button`
  background-color: ${props =>
    props.theme.connected ? "grey" : "var(--brand)"};
  border: none;
  border-radius: 0.25rem;
  width: 100%;
  outline: none;
  &:hover {
    opacity: 0.8;
  }
  padding: 0.5rem;
  cursor: ${props => (props.theme.connected ? "not-allowed" : "pointer")};
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

const ButtonConnectGoogle: FC<ButtonAttr> = ({ connected, ...props }) => {
  const { formatMessage } = useContext(IntlContext)
  return (
    <ButtonWrapper>
      <Button {...props} theme={{ connected }}>
        <Google height="1.3rem" />
        {formatMessage(WORD_RecapAccButtonConnectGoogle)}
      </Button>
    </ButtonWrapper>
  )
}

export default ButtonConnectGoogle
