import { useRouter } from "next/router"
import { useContext, useState } from "react"
import styled from "styled-components"
import { locale } from "../../@types/interface"
import translatedWords from "../../helpers/translatedWords"
import AccordionElement from "../elements/Accordion"
import { IntlContext } from "react-intl"
import {
  WORD_FAQExcl1,
  WORD_FAQExcl2,
  WORD_FAQExcl3,
  WORD_FAQExcl4,
  WORD_FAQResponse2,
  WORD_FAQQuestion1,
  WORD_FAQQuestion2,
  WORD_FAQQuestion3,
  WORD_FAQQuestion4,
  WORD_FAQResponse1,
  WORD_FAQResponse3,
  WORD_FAQResponse4,
  WORD_NavbarLink2,
} from "../../Dictionary"
const AccordionContainer = styled.div`
  margin-bottom: 5rem;
`
const Div = styled.div`
  margin-bottom: 2rem;
`

const FAQ = ({ all }: { all?: boolean }) => {
  const { formatMessage } = useContext(IntlContext)
  const [active, setActive] = useState("titre1")
  return (
    <>
      <Div>
        <h2 style={{ textAlign: "center" }}>
          {formatMessage(WORD_NavbarLink2)}
        </h2>
      </Div>
      <AccordionContainer>
        <AccordionElement
          //title={t.faq_section.question1.question}
          title={formatMessage(WORD_FAQQuestion1)}
          active={active}
          setActive={setActive}
          exclamation={formatMessage(WORD_FAQExcl1)}
          response={formatMessage(WORD_FAQResponse1)}
        />
        <AccordionElement
          title={formatMessage(WORD_FAQQuestion2)}
          active={active}
          setActive={setActive}
          exclamation={formatMessage(WORD_FAQExcl2)}
          response={formatMessage(WORD_FAQResponse2)}
        />
        <AccordionElement
          title={formatMessage(WORD_FAQQuestion3)}
          active={active}
          setActive={setActive}
          exclamation={formatMessage(WORD_FAQExcl3)}
          response={formatMessage(WORD_FAQResponse3)}
        />
        <AccordionElement
          title={formatMessage(WORD_FAQQuestion4)}
          active={active}
          setActive={setActive}
          exclamation={formatMessage(WORD_FAQExcl4)}
          response={formatMessage(WORD_FAQResponse4)}
        />
        {all && <></>}
      </AccordionContainer>
    </>
  )
}

export default FAQ
