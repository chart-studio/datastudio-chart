import { Dispatch, SetStateAction } from "react"
import styled from "styled-components"
import CloseButton from "./CloseButton"

const Accordion = styled.div`
  --rad: 0.2rem;
  width: 100%;
  margin: 1rem auto;
  .accordionHeading {
    cursor: pointer;
    background: var(--secondary-fg);
    padding: 0.5rem;
    border-radius: var(--rad);
    transition: border-radius 600ms ease-in-out;
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .accordionContent {
    padding-top: 0.5rem;
    background: var(--surface3);
    height: 0;
    opacity: 0;
    display: flex;
    overflow: hidden;
    transition: height 600ms ease-in-out, opacity 600ms ease-in-out;
    border-radius: 0 0 var(--rad) var(--rad);
  }

  &.show {
    .accordionContent {
      height: 10rem;
      opacity: 1;
    }
    .accordionHeading {
      border-radius: var(--rad) var(--rad) 0 0;
    }
  }
`

const Exclamation = styled.p`
  margin: 0.5rem 0;
`

const AccordionElement = ({
  title,
  response,
  active,
  setActive,
  exclamation,
}: {
  title: string
  response: string
  active: string
  setActive: Dispatch<SetStateAction<string>>
  exclamation: string
}) => {
  return (
    <Accordion className={`${active === title ? "show " : ""}`}>
      <div
        className="accordionHeading"
        onClick={() => {
          if (active !== title) {
            setActive(title)
          } else {
            setActive("")
          }
        }}
      >
        <div className="container">
          <p>{title}</p>
          <span>
            <CloseButton openMenu={active === title} />
          </span>
        </div>
      </div>
      <div className={`accordionContent`}>
        <div className="container">
          <Exclamation>{exclamation}</Exclamation>
          <p>{response}</p>
        </div>
      </div>
    </Accordion>
  )
}

export default AccordionElement
