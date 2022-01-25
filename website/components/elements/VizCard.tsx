import styled from "styled-components"
import Link from "next/link"
import Info_icon from "../icon/Info_icon"
import Book_icon from "../icon/Book_icon"
import ToolTipWrapper from "./ToolTipWrapper"
import fr from "../../locales/fr"
import Share from "../icon/Share"

type Card = {
  link: string
  link_image: string
  title: string
  desc: string
  addDate: string
  tool: string
  t: typeof fr
}
const VizContainer = styled.div`
  width: 100%;
  background-color: var(--surface3);
  border-radius: 12px;
  position: relative;
  padding-bottom: 0.5rem;
  border: solid 1px var(--surface2);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

const Img = styled.img`
  height: 13rem;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
`
const Date = styled.div`
  margin: 0.8rem 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const DescText = styled.div`
  margin: 0.5rem 0rem;
`

const BlockButton = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 1rem;
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  border: solid 1px var(--surface4);
  background-color: var(--surface2);
  border-radius: 5px;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  span {
    margin-left: 0.5rem;
  }
  :hover {
    opacity: 0.9;
  }
`
const ButtonContainerInfo = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  border: solid 1px var(--surface4);
  background-color: var(--warning);
  border-radius: 5px;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  span {
    margin-left: 0.5rem;
  }
  :hover {
    opacity: 0.9;
  }
`
const ButtonContainerSub = styled.div`
  display: flex;
  align-items: center;
  width: 32%;
  border: solid 1px var(--surface4);
  background-color: var(--secondary-fg);
  border-radius: 5px;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  span {
    margin-left: 0.5rem;
  }
  :hover {
    opacity: 0.9;
  }
`
const Space = styled.div`
  margin-top: auto;
`

const Tool = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  border: solid 1px var(--surface4);
  //backdrop-filter: blur(25px);
  user-select: none;
  background-color: var(--surface2);
  opacity: 0.95;
`

const VizCard = ({ link, link_image, title, desc, addDate, t, tool }: Card) => {
  return (
    <VizContainer>
      <Tool>{tool}</Tool>
      <Img src={link_image} />
      <Date>
        <ToolTipWrapper
          classNameTooltip="ShareTooltip"
          tooltiptext={t.button.share}
        >
          <Share />
        </ToolTipWrapper>

        <div>
          <span>{t.autreText.add}</span>
          <time dateTime={addDate}>{addDate}</time>
        </div>
      </Date>
      <h6>{title}</h6>
      <DescText className="">
        <p>{desc}</p>
      </DescText>

      <Space />
      <BlockButton>
        <Link href={link}>
          <ButtonContainer>
            <a rel="noopener noreferrer">
              <ToolTipWrapper
                classNameTooltip="DocTootip"
                posRelativLeftPixel="-66px"
                tooltiptext={t.tooltip.doc}
              >
                <Book_icon width="0.8rem" /> <span>{t.button.doc}</span>
              </ToolTipWrapper>
            </a>
          </ButtonContainer>
        </Link>

        <ButtonContainerInfo>
          <ToolTipWrapper tooltiptext={t.tooltip.essai}>
            <Info_icon width="0.8rem" /> <span>{t.button.essai}</span>
          </ToolTipWrapper>
        </ButtonContainerInfo>
        <ButtonContainerSub>{t.button.sousc}</ButtonContainerSub>
      </BlockButton>
    </VizContainer>
  )
}

export default VizCard
