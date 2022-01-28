import Container from "../components/layout/Container"
import { useAuthState } from "react-firebase-hooks/auth"
import Section1 from "../components/sections/Section1"
import styled from "styled-components"
import fr from "../locales/fr"
import en from "../locales/en"
import VizCard from "../components/elements/VizCard"
import RecapAccount from "../components/elements/RecapAccount"
import { getAuth } from "firebase/auth"
import { firebaseApp } from "../firebaseAuth"
import { getAllDocs } from "../lib/mdx"
import { InterDocs, locale } from "../@types/interface"
import { useAuth } from "../hooks/useAuth"
import { GetServerSideProps } from "next"
import Stripe from "stripe"
import ModalContainer from "../components/elements/ModalContainer"
import { useClickAway } from "../hooks/useClickAway"
import { useEffect, useState } from "react"
import Modals from "../components/Modals"

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
  const { open, setOpen, refControler, refObject } = useClickAway(false)
  const [selectedModal, setSelectedModal] = useState("")
  const [selectedGraph, setSelectedGraph] = useState("")
  const [selectedDoc, setSelectedDoc] = useState("")
  const [selectedGrapPrice, setSelectedGrapPrice] = useState("")
  const [connected, setConnected] = useState(false)

  const { user } = useAuth()
  console.log(docs, "test", user)
  const t = locale === "fr" ? fr : en
  useEffect(() => {
    if (user) {
      setConnected(true)
    } else {
      setConnected(false)
    }
  }, [user])
  return (
    <>
      <Section1 t={t} />
      <RecapAccount t={t} connected={user ? true : false} user={user} />
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
              stripePrice={val.meta.chartInfo.stripeInfo.priceId}
              cloudName={val.meta.chartInfo.cloudName}
              id={user ? user.uid : ""}
              setOpenModal={setOpen}
              connected={connected}
              setSelectedModal={setSelectedModal}
              setSelectedGraph={setSelectedGraph}
              setSelectedDoc={setSelectedDoc}
              setSelectedGrapPrice={setSelectedGrapPrice}
              user={user}
            />
          ))}
        </Grid>
        <ModalContainer
          isOpen={open}
          closeFunc={() => setOpen(false)}
          refObject={refObject}
          refControler={refControler}
          isBlur
          opacityBackground={0.2}
        >
          <Modals
            selectedModal={selectedModal}
            selectedGraph={selectedGraph}
            setOpenModal={setOpen}
            selectedDoc={selectedDoc}
            selectedGrapPrice={selectedGrapPrice}
          />
        </ModalContainer>
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

// export const getServerSideProps: GetServerSideProps = async () => {
//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//     apiVersion: "2020-08-27",
//   })
// }
