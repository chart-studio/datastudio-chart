import styled from "styled-components"
import Image from "next/image"
const SvgContainer = styled.div`
  padding: 1rem;
`

const FunnelChart1 = () => {
  return (
    <>
      <SvgContainer>
        <Image
          src="/Graphs/funnel-light-1.PNG"
          alt="funnel-light"
          width={600}
          height={500}
        />
      </SvgContainer>
    </>
  )
}
export default FunnelChart1
