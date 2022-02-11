import { useState } from "react"
import styled from "styled-components"
import { copyLinkFunc } from "../../helpers/copyLinkFunc"
import { useAuth } from "../../hooks/useAuth"
import fr from "../../locales/fr"
import LinkIco from "../icon/Link"
import ToolTipWrapper from "./ToolTipWrapper"

const DivHold = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  input[type="text"] {
    background-color: var(--surface4);
    height: 2.5rem;
    min-width: 80%;
    border: none;
    outline: none;
    padding-left: 1rem;
    border-radius: 8px 0 0 8px;
  }
  .divSvg {
    display: flex;
    cursor: pointer;
    position: relative;
    border-radius: 0 8px 8px 0;
    height: 2.5rem;
    min-width: 30%;
    border: none;
    outline: none;
    background-color: var(--brand);
    transition: background-color var(--speed) ease-in-out;
    padding: 0 0.5rem;
    &:hover {
      opacity: 0.5;
    }
  }
  .copied {
    background-color: var(--success);
  }

  input[type="submit"]:hover {
    background: var(--brand);
  }
`

const LinkHold = ({ testLink, t }: { testLink: string; t: typeof fr }) => {
  const [copy, setCopy] = useState(false)
  return (
    <>
      <DivHold>
        <input
          type="text"
          name="linkGoogleStorage"
          id="linkGoogleStorage"
          required
          value={testLink}
          placeholder="gs://..."
          disabled
          onChange={() => {}}
        />
        {!copy ? (
          <ToolTipWrapper
            tooltiptext={t.modalText.button.copy}
            id="testCopy"
            onClick={() => {
              copyLinkFunc("linkGoogleStorage")
              setCopy(true)
            }}
          >
            <div className="divSvg">
              <LinkIco />
            </div>
          </ToolTipWrapper>
        ) : (
          <ToolTipWrapper tooltiptext={t.modalText.button.copied}>
            <div className="divSvg copied">
              <LinkIco />
            </div>
          </ToolTipWrapper>
        )}
      </DivHold>
    </>
  )
}

export default LinkHold
