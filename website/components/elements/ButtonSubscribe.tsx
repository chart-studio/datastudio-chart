import { FC, InputHTMLAttributes, useEffect, useState } from "react"
import styled from "styled-components"
import { handleLocalStorage } from "../../helpers/handleLocalStorage"
import ToolTipWrapper from "./ToolTipWrapper"

interface FormSubsc extends InputHTMLAttributes<HTMLFormElement> {
  titleName: string
  titleOk: string
}

const Form = styled.form`
  display: flex;
  input[type="email"] {
    background-color: var(--surface4);
    height: 2.5rem;
    min-width: 80%;
    border: none;
    outline: none;
    padding-left: 1rem;
    border-radius: 8px 0 0 8px;
  }
  input[type="submit"] {
    position: relative;
    border-radius: 0 8px 8px 0;
    height: 2.5rem;
    min-width: 30%;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: var(--primary-fg);
    transition: background-color var(--speed) ease-in-out;
  }

  input[type="button"] {
    position: relative;
    border-radius: 0 8px 8px 0;
    height: 2.5rem;
    min-width: 30%;
    border: none;
    outline: none;
    cursor: not-allowed;
    background-color: var(--success);
    transition: background-color var(--speed) ease-in-out;
    padding: 0 0.5rem;
    &:hover {
      opacity: 0.5;
    }
  }

  input[type="submit"]:hover {
    background: var(--brand);
  }
`

const ButtonSubscribe: FC<FormSubsc> = ({ titleName, titleOk, ...props }) => {
  const [email, setEmail] = useState("")
  const [subscription, setSubscription] = useState("")
  const [save, setSave] = useState(false)
  useEffect(() => {
    let listEmails = handleLocalStorage("get", "email")
    if (listEmails) {
      setSubscription(listEmails)
    }
  }, [])
  return (
    <>
      <Form
        {...props}
        onSubmit={async e => {
          e.preventDefault()
          if (!subscription || !subscription.includes(email)) {
            console.log(`email:${email}`)
            handleLocalStorage(
              "add",
              `email`,
              `${subscription !== "" ? `${subscription},` : ""}${email}`
            )
            setSubscription(
              `${subscription !== "" ? `${subscription},` : ""}${email}`
            )
            console.log(save, "save in")
          }
          console.log(save, subscription, "save out")

          // const { status } = await axios({
          //     method: "POST",
          //     url: `/api/addEmailNewsletter?email=${email}`,
          //     headers: {
          //         "Content-Type": "application/json",
          //     },
          // })
          console.log(status, "status")
          setSave(true)
        }}
      >
        <input type="text" name="_honey_spam" style={{ display: "none" }} />
        <input
          type="email"
          name="subscribe"
          id="email"
          autoComplete="email"
          required
          value={email}
          onChange={e => {
            setEmail(e.currentTarget.value)
          }}
          placeholder="exemple@email.com"
        />
        {!save ? (
          <input type="submit" value={titleName} tabIndex={0} />
        ) : (
          <ToolTipWrapper
            tooltiptext={
              titleName === "Merci"
                ? "Merci pour votre inscription"
                : "Thanks for your subscription"
            }
          >
            <input type="button" value={titleName} tabIndex={0} />
          </ToolTipWrapper>
        )}
      </Form>
    </>
  )
}

export default ButtonSubscribe
