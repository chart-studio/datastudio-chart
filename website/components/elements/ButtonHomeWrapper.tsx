import { ButtonHTMLAttributes, FC } from "react"
import styled from "styled-components"

type ButtonAttr = ButtonHTMLAttributes<HTMLButtonElement>

const Button = styled.button`
  background-color: var(--brand);
  border: none;
  border-radius: 0.25rem;
  width: 100%;
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

const ButtonHomeWrapper: FC<ButtonAttr> = ({ children, ...props }) => {
  return (
    <ButtonWrapper>
      <Button {...props}>{children}</Button>
    </ButtonWrapper>
  )
}

export default ButtonHomeWrapper
