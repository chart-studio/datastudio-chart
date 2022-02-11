import React from "react"
import styled from "styled-components"
const SvgContainer = styled.div`
  padding: 1rem;
`
const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.25rem;
`

const GraphImg = ({ link, alt }: { link: string; alt: string }) => {
  return (
    <div>
      <SvgContainer>
        <Img src={link} alt={alt} loading="lazy" />
      </SvgContainer>
    </div>
  )
}

export default GraphImg
