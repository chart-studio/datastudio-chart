import React, { useContext, useEffect, useState } from "react"
import { Router, useRouter, withRouter } from "next/router"
import { useAuth } from "../../hooks/useAuth"
import styled from "styled-components"
import cancelSubscription from "../../helpers/cancelSubscription"
import fr from "../../locales/fr"
import en from "../../locales/en"
import { routerDir } from "../../helpers/routerDir"
import { useClickAway } from "../../hooks/useClickAway"
import ModalContainer from "../../components/elements/ModalContainer"
import { IntlContext } from "react-intl"
import {
  WORD_ModalAccountUnsubsc,
  WORD_ModalAccountUnsubscNext,
} from "../../Dictionary"

const ButtonDes = styled.button`
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  background-color: var(--warning);
  border-radius: 0.5rem;
  border: solid 1px var(--warning);
  height: 2.2rem;
  align-items: center;
  justify-content: center;
  :hover {
    opacity: 0.8;
  }
  :disabled {
    opacity: 0.5;
  }
`
const index = () => {
  const { open, setOpen, refControler, refObject } = useClickAway(false)
  const { formatMessage } = useContext(IntlContext)
  const { user, setUser } = useAuth()
  const [desab, setDesab] = useState(false)
  const router = useRouter()
  useEffect(() => {
    if (!user) {
      router.push(`/`, undefined, {
        shallow: true,
      })
    } else {
      if (user.status_subsc) {
        setDesab(true)
      }
    }
  }, [router])
  if (!user) {
    return null
  }

  return (
    <div className="container-checkout">
      {/* <div>{JSON.stringify(user.stripeId)}</div> */}
      {desab ? (
        <ButtonDes
          onClick={async () => {
            await cancelSubscription(user.subscriptionId, user.uid)
            setUser!(prev => {
              if (prev) {
                prev.subscriptionId = ""
                prev.status_subsc = false
                prev.subsc = []
              }
              return prev
            })
            setDesab(false)
          }}
        >
          {formatMessage(WORD_ModalAccountUnsubsc)}
        </ButtonDes>
      ) : (
        <ButtonDes
          onClick={() => {
            routerDir(router, "/")
          }}
        >
          {formatMessage(WORD_ModalAccountUnsubscNext)}
        </ButtonDes>
      )}
    </div>
  )
}

export default index
