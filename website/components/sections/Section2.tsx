import styled from "styled-components"
import fr from "../../locales/fr"
import Container from "../layout/Container"
import Google from "../icon/Google"
import BarChart from "../icon/BarChart"
import LinkIco from "../icon/Link"
import LinkHome from "../icon/LinkHome"
import DataStudioIcon from "../icon/DataStudio"

const Section = styled.section`
  --gap: 2rem;
  --size: 300px;
  display: grid;
  gap: var(--gap);
  text-align: center;
  margin-bottom: 3rem;
  .react-multi-carousel-list {
    padding-top: 1rem;
    justify-content: center;
  }
  .react-multi-carousel-track {
    gap: calc(var(--gap) / 2);
  }
`
const CardHowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  p {
    text-align: left;
  }
  h6 {
    margin-bottom: 1rem;
  }
  @media (min-width: 48rem) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const CardHow = styled.div`
  position: relative;
  border: solid 1px var(--surface3);
  border-radius: 0.5rem;
  padding: 1rem;
`

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  padding: 0.5rem 0;
  svg {
    margin: 0;
  }
`

const Section2 = ({ t }: { t: typeof fr }) => {
  return (
    <Container>
      <Section>
        <h2>{t.how_section.title}</h2>
        <CardHowContainer>
          <CardHow>
            <LogoDiv>
              <Google width="2rem" height="2rem" />
            </LogoDiv>

            <header>
              <h6>{t.how_section.block1.title}</h6>
            </header>
            <p>{t.how_section.block1.content}</p>
          </CardHow>
          <CardHow>
            <LogoDiv>
              <BarChart width="1.6rem" height="1.6rem" />
            </LogoDiv>

            <header>
              <h6>{t.how_section.block2.title}</h6>
            </header>
            <p>{t.how_section.block2.content}</p>
          </CardHow>
          <CardHow>
            <LogoDiv>
              <LinkHome width="1.4rem" height="1.4rem" />
            </LogoDiv>

            <header>
              <h6>{t.how_section.block3.title}</h6>
            </header>
            <p>{t.how_section.block3.content}</p>
          </CardHow>
          <CardHow>
            <LogoDiv>
              <DataStudioIcon width="1.6rem" height="1.6rem" />
            </LogoDiv>
            <header>
              <h6>{t.how_section.block4.title}</h6>
            </header>
            <p>{t.how_section.block4.content}</p>
            <b>
              {"==>> "}
              <a
                href="https://developers.google.com/datastudio/visualization/load-viz"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.how_section.block4.linkName}
              </a>
            </b>
          </CardHow>
        </CardHowContainer>
      </Section>
    </Container>
  )
}

export default Section2
