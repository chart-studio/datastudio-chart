import React from "react"
import styled from "styled-components"
const Div = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  img {
    width: 50%;
    height: auto;
  }
  @media (max-width: 48rem) {
    img {
      width: 100%;
      height: auto;
    }
  }
`

const ImageMdx = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Div>
      <img src={src} alt={alt} />
    </Div>
  )
}

export default ImageMdx
