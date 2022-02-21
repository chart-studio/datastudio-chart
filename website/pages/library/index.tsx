import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { InterDocs, locale } from "../../@types/interface"
import ModalContainer from "../../components/elements/ModalContainer"
import VizCard from "../../components/elements/VizCard"
import Container from "../../components/layout/Container"
import Modals from "../../components/Modals"
import SeoHome from "../../components/SEO/seoHome"
import translatedWords from "../../helpers/translatedWords"
import { useAuth } from "../../hooks/useAuth"
import { useClickAway } from "../../hooks/useClickAway"
import { getAllDocs } from "../../lib/mdx"
import { IntlContext } from "react-intl"
import { WORD_NavbarLink3 } from "../../Dictionary"

const Grid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  gap: 2rem;
  padding: 0 0 0.5rem 0;
`

const index = ({ docs }: { docs: InterDocs[] }) => {
  const { formatMessage } = useContext(IntlContext)
  const { open, setOpen, refControler, refObject } = useClickAway(false)
  const [selectedModal, setSelectedModal] = useState("")
  const [selectedGraph, setSelectedGraph] = useState("")
  const [selectedDoc, setSelectedDoc] = useState("")
  const [selectedGrapPrice, setSelectedGrapPrice] = useState("")
  const [connected, setConnected] = useState(false)
  const { user } = useAuth()
  useEffect(() => {
    if (user) {
      setConnected(true)
    } else {
      setConnected(false)
    }
  }, [user])

  return (
    <>
      <SeoHome title={formatMessage(WORD_NavbarLink3)} />
      <Container>
        <Grid>
          {docs.map((val, i) => (
            <VizCard
              tool={val.meta.chartInfo.vizTool}
              desc={val.meta.chartInfo.desc}
              link={`/library/${val.meta.slug}`}
              link_image={val.meta.chartInfo.link_image}
              title={val.meta.chartInfo.name}
              addDate={val.meta.chartInfo.addedAt}
              key={val.meta.chartInfo.id}
              stripePrice={val.meta.chartInfo.stripeInfo.priceId}
              cloudName={val.meta.chartInfo.cloudName}
              setOpenModal={setOpen}
              connected={connected}
              setSelectedModal={setSelectedModal}
              setSelectedGraph={setSelectedGraph}
              setSelectedDoc={setSelectedDoc}
              setSelectedGrapPrice={setSelectedGrapPrice}
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

export default index

export async function getStaticProps({ locale }: { locale: locale }) {
  const docs = getAllDocs(locale)
  return {
    props: { docs },
  }
}
