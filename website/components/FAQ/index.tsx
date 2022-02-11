import { useRouter } from "next/router"
import { useState } from "react"
import styled from "styled-components"
import { locale } from "../../@types/interface"
import translatedWords from "../../helpers/translatedWords"
import AccordionElement from "../elements/Accordion"

const AccordionContainer = styled.div`
  margin-bottom: 5rem;
`

const FAQ = ({ all, locale }: { all?: boolean; locale: locale }) => {
  const [active, setActive] = useState("titre1")
  const t = translatedWords(locale)
  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>{t.faq_section.title}</h2>
      </div>
      <AccordionContainer>
        <AccordionElement
          title={t.faq_section.question1.question}
          active={active}
          setActive={setActive}
          exclamation={t.faq_section.question1.response.exclamation}
          response={t.faq_section.question1.response.response}
        />
        <AccordionElement
          title={t.faq_section.question2.question}
          active={active}
          setActive={setActive}
          exclamation={t.faq_section.question2.response.exclamation}
          response={t.faq_section.question2.response.response}
        />
        <AccordionElement
          title={t.faq_section.question3.question}
          active={active}
          setActive={setActive}
          exclamation={t.faq_section.question3.response.exclamation}
          response={t.faq_section.question3.response.response}
        />
        <AccordionElement
          title={t.faq_section.question4.question}
          active={active}
          setActive={setActive}
          exclamation={t.faq_section.question4.response.exclamation}
          response={t.faq_section.question4.response.response}
        />
        {all && <></>}
      </AccordionContainer>
    </>
  )
}

export default FAQ
