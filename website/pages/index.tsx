import Container from "../components/layout/Container"
import { useAuthState } from "react-firebase-hooks/auth"
import Section1 from "../components/sections/Section1"
import styled from "styled-components"
import { useRouter } from "next/router"
import fr from "../locales/fr"
import en from "../locales/en"
import VizCard from "../components/elements/VizCard"
import RecapAccount from "../components/elements/RecapAccount"
import { getAuth } from "firebase/auth"
import { firebaseApp } from "../firebaseAuth"
import { getAllDocs } from "../lib/mdx"
import { InterDocs, locale } from "../@types/interface"

const auth = getAuth(firebaseApp)
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  gap: 2rem;
  padding: 0 0 0.5rem 0;
`

const HomePage = ({ docs, locale }: { docs: InterDocs[]; locale: locale }) => {
  console.log(docs)
  const [user, loading, error] = useAuthState(auth)
  const t = locale === "fr" ? fr : en
  return (
    <>
      <Section1 t={t} />
      <RecapAccount t={t} connected={user ? true : false} />
      <Container>
        <Grid>
          {docs.map((val, i) => (
            <VizCard
              tool={val.meta.chartInfo.vizTool}
              desc={val.meta.chartInfo.desc}
              link={`/docs/${val.meta.slug}`}
              link_image={val.meta.chartInfo.link_image}
              title={val.meta.chartInfo.name}
              addDate={val.meta.chartInfo.addedAt}
              key={val.meta.chartInfo.id}
              t={t}
            />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default HomePage

export async function getStaticProps({ locale }: { locale: locale }) {
  const docs = getAllDocs(locale)
  return {
    props: { docs, locale },
  }
}
