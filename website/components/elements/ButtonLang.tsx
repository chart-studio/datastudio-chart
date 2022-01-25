import styled from "styled-components"
import { useClickAway } from "../../hooks/useClickAway"
import Dropdown from "./Dropdown"

const Svg = styled.svg`
  width: 1.2rem;
  height: 1.2rem;
  fill: var(--text2);
`

const ButtonLang = ({ className }: { className: string }) => {
  let { open, setOpen, refControler, refObject } = useClickAway(false)
  return (
    <>
      <div style={{ position: "relative" }}>
        <button
          type="button"
          aria-label="changer la langue"
          tabIndex={0}
          className={className}
          onClick={() => setOpen(true)}
          data-toggle="lang"
          ref={refControler}
        >
          <Svg
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="m-1"
          >
            <path d="m12.87 15.07-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z"></path>
          </Svg>
        </button>
        {!open ? null : (
          <Dropdown refObject={refObject} setOpen={setOpen} open={open} />
        )}
      </div>
    </>
  )
}

export default ButtonLang
