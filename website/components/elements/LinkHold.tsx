import { useState } from "react"
import styled from "styled-components"
import { copyLinkFunc } from "../../helpers/copyLinkFunc"
import { useAuth } from "../../hooks/useAuth"
import ToolTipWrapper from "./ToolTipWrapper"

const DivHold = styled.div`
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
  input[type="button"] {
    cursor: pointer;
    position: relative;
    border-radius: 0 8px 8px 0;
    height: 2.5rem;
    min-width: 30%;
    border: none;
    outline: none;
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

const LinkHold = ({ testLink }: { testLink: string }) => {
  const [copy, setCopy] = useState(false)
  return (
    <>
      <DivHold>
        <input
          type="email"
          name="subscribe"
          id="email"
          autoComplete="email"
          required
          value={testLink}
          placeholder="gs://..."
        />
        {!copy ? (
          <ToolTipWrapper
            tooltiptext="Vous pouvez copier"
            id="testCopy"
            onClick={() => {
              copyLinkFunc("testCopy")
              setCopy(true)
            }}
          >
            <input type="button" value="copy" tabIndex={0} />
          </ToolTipWrapper>
        ) : (
          <ToolTipWrapper tooltiptext="Text copié">
            <input type="button" value="ok" tabIndex={0} />
          </ToolTipWrapper>
        )}
      </DivHold>
    </>
  )
}

export default LinkHold
