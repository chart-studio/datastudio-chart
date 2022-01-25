import styled from "styled-components"
import fr from "../../locales/fr"
import CheckMark_icon from "../icon/CheckMark_icon"

const Section = styled.section`
  height: 72vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  h1 {
    margin: auto auto 1rem auto;
  }
  li {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    span {
      margin-left: 0.8rem;
    }
    margin: 0.5rem 0;
  }
  ul {
    @media (max-width: 48rem) {
      & {
        padding: 0;
      }
    }
  }
`

const Section1 = ({ t }: { t: typeof fr }) => {
  return (
    <Section>
      <div>
        <h1>{t.hero_section.title}</h1>
        <ul>
          <li>
            <CheckMark_icon />
            <span>{t.hero_section.option1}</span>
          </li>
          <li>
            <CheckMark_icon />
            <span>{t.hero_section.option2}</span>
          </li>
          <li>
            <CheckMark_icon />
            <span>{t.hero_section.option3}</span>
          </li>
        </ul>
      </div>
    </Section>
  )
}

export default Section1
