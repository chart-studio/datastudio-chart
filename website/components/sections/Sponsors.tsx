import Image from "next/image"
import React from "react"
import styled from "styled-components"
import Container from "../layout/Container"
const ContainerDiv = styled.div`
  margin: 3rem 0 3rem 0;
`

const ImgContainer = styled.div`
  margin: 3rem 0 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Sponsors = () => {
  return (
    <ContainerDiv>
      <Container>
        <h2 style={{ textAlign: "center" }}>Sponsors</h2>
        <ImgContainer>
          <a
            href="https://data-hanalytics.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/sponsors/logo_hanalytics.png"
              width={"250px"}
              height={"105px"}
            />
          </a>
        </ImgContainer>
      </Container>
    </ContainerDiv>
  )
}

export default Sponsors
