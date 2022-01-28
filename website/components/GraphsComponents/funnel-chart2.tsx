import styled from "styled-components"
import Image from "next/image"
const SvgContainer = styled.div`
  padding: 1rem;
`

const FunnelChart2 = () => {
  return (
    <>
      <SvgContainer>
        <Image
          src="/Graphs/Beautiful-SVG-Funnel.png"
          alt="funnel-light"
          width={600}
          height={500}
        />
      </SvgContainer>
    </>
  )
}
export default FunnelChart2
