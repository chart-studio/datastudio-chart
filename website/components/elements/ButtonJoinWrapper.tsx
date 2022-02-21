import { ButtonHTMLAttributes, FC } from "react"
import styled from "styled-components"

type ButtonAttr = ButtonHTMLAttributes<HTMLButtonElement>

const Button = styled.button`
  background-color: var(--surface3);
  //border: none;
  border: solid 1px var(--secondary-fg);
  border-radius: 0.25rem;
  //width: 100%;
  outline: none;
  &:hover {
    opacity: 0.8;
  }
  padding: 0.125rem 0.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.9px;
  font-size: 12px;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ButtonJoinWrapper: FC<ButtonAttr> = ({ children, ...props }) => {
  return (
    <ButtonWrapper>
      <Button {...props}>{children}</Button>
    </ButtonWrapper>
  )
}

export default ButtonJoinWrapper
