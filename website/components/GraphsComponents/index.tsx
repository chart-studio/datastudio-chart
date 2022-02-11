import React from "react"
import styled from "styled-components"
import GraphImg from "./GraphImg"
const SvgContainer = styled.div`
  padding: 1rem;
`
const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.25rem;
`

const GraphsComponent = ({ val }: { val: string }) => {
  if (val === "FunnelChart1") {
    return (
      <GraphImg link="/Graphs/funnel-light-1.PNG" alt="funnel chart image" />
    )
  }
  if (val === "Timebrush_one") {
    return <GraphImg link="/Graphs/time_brush_one.PNG" alt="Timebrush image" />
  }
  return null
}

export default GraphsComponent
