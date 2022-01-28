import { animated, useTransition, config } from "react-spring"
import React, { Dispatch, RefObject, SetStateAction } from "react"
import styled from "styled-components"
import { useRouter } from "next/router"
import { routerDir } from "../../helpers/routerDir"
import { getAuth, signOut } from "firebase/auth"
import { firebaseApp } from "../../firebaseAuth"

const auth = getAuth(firebaseApp)

const Div = styled(animated.div)`
  position: absolute;
  top: 2.6rem;
  width: 8rem;
  transform: translateX(-50%);
  background-color: var(--surface3);
  padding: 0rem;
  overflow: hidden;
  border: solid 1px var(--surface4);
`
const DropDownItem = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: ${props => (props.theme.activ === true ? "var(--brand)" : null)};
  transition: background-color var(--speed);
  letter-spacing: 0.8px;
  font-size: inherit;
  padding: 1rem;
  border-bottom: 1px solid var(--surface4);
  cursor: pointer;
  :hover {
    background-color: var(--surface4);
  }
`

const DropdownAcc = ({
  refObject,
  setOpen,
  open,
}: {
  refObject: RefObject<HTMLDivElement>
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
}) => {
  const router = useRouter()
  const { locale } = router
  const transitions = useTransition(open, {
    from: { opacity: "0" },
    enter: { opacity: "1" },
    leave: { opacity: "0" },
    config: config.stiff,
  })

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <Div style={styles} className="br-4" ref={refObject}>
              <DropDownItem
                theme={{ activ: locale === "en" }}
                onClick={() => {
                  setOpen(false)
                  routerDir(router, "/account")
                }}
              >
                Account
              </DropDownItem>
              <DropDownItem
                theme={{ activ: locale === "fr" }}
                onClick={() => {
                  setOpen(false)
                  signOut(auth)
                  routerDir(router, "/")
                }}
              >
                Logout
              </DropDownItem>
            </Div>
          )
      )}
    </>
  )
}

export default DropdownAcc
