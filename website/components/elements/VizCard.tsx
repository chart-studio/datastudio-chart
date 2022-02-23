import styled from "styled-components"
import Link from "next/link"
import Info_icon from "../icon/Info_icon"
import Book_icon from "../icon/Book_icon"
import ToolTipWrapper from "./ToolTipWrapper"
import { IntlContext } from "react-intl"
import Share from "../icon/Share"
import { subscribe } from "../../helpers/subscribe"
import { tryGraph } from "../../helpers/tryGraph"
import { Dispatch, SetStateAction, useContext, useEffect } from "react"
import { Card } from "../../@types/interface"
import { useAuth } from "../../hooks/useAuth"
import shareLink from "../../helpers/shareLink"
import { useRouter } from "next/router"
import translatedWords from "../../helpers/translatedWords"
import {
  WORD_CardButtonAdded,
  WORD_FooterNewsletterSubscribe,
  WORD_LibButtonDoc,
  WORD_LibButtonEssai,
  WORD_LibButtonShare,
  WORD_TooltipEssai,
  WORD_TooltipReadDoc,
} from "../../Dictionary"

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
  //background-color: var(--warning);
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
const Span = styled.span`
  text-decoration: ${props => (props.theme.selected ? "line-through" : null)};
  cursor: ${props => (props.theme.selected ? "not-allowed" : null)};
`

const VizCard = ({
  link,
  link_image,
  title,
  desc,
  addDate,
  tool,
  stripePrice,
  cloudName,
  setOpenModal,
  connected,
  setSelectedModal,
  setSelectedGraph,
  setSelectedDoc,
  setSelectedGrapPrice,
}: Card) => {
  const { formatMessage } = useContext(IntlContext)
  const { locale } = useRouter() as { locale: "fr" | "en" }
  const t = translatedWords(locale)
  const { user } = useAuth()
  useEffect(() => {}, [user])
  return (
    <VizContainer>
      <Tool>{tool}</Tool>
      <Img src={link_image} alt={`image ${title}`} />
      <Date>
        <ToolTipWrapper
          classNameTooltip="ShareTooltip"
          tooltiptext={formatMessage(WORD_LibButtonShare)}
          onClick={shareLink(
            setOpenModal,
            setSelectedModal,
            locale,
            link,
            setSelectedDoc
          )}
        >
          <Share />
        </ToolTipWrapper>
        <div>
          <span>{formatMessage(WORD_CardButtonAdded, { date: addDate })}</span>
        </div>
      </Date>
      <p>
        <b>{title}</b>
      </p>
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
                tooltiptext={formatMessage(WORD_TooltipReadDoc)}
              >
                <Book_icon width="0.8rem" />{" "}
                <span>{formatMessage(WORD_LibButtonDoc)}</span>
              </ToolTipWrapper>
            </a>
          </ButtonContainer>
        </Link>

        <ButtonContainerInfo
          onClick={() => {
            if (!connected) {
              setSelectedModal("connect")
              setOpenModal(true)
            } else if (
              user &&
              (user.trygraph.findIndex(x => x.graphname == cloudName) > -1 ||
                user.subsc.findIndex(x => x.graphname == cloudName) > -1 ||
                user.status_subsc === true)
            ) {
              //do nothing
            } else if (user && user.trygraph.length >= 3) {
              setSelectedModal("allCreditUsed")
              setOpenModal(true)
            } else {
              setSelectedModal("try")
              setSelectedGraph(cloudName)
              setSelectedDoc(link)
              setOpenModal(true)
            }
          }}
        >
          <ToolTipWrapper tooltiptext={formatMessage(WORD_TooltipEssai)}>
            <Info_icon width="0.8rem" />{" "}
            <Span
              theme={{
                selected:
                  user &&
                  (user.trygraph.findIndex(x => x.graphname == cloudName) >
                    -1 ||
                    user.subsc.findIndex(x => x.graphname == cloudName) > -1 ||
                    user.status_subsc === true),
              }}
            >
              {formatMessage(WORD_LibButtonEssai)}
            </Span>
          </ToolTipWrapper>
        </ButtonContainerInfo>
        <ButtonContainerSub
          onClick={() => {
            if (!connected) {
              setOpenModal(true)
              setSelectedModal("connect")
            } else if (
              user &&
              user.subsc.findIndex(x => x.graphname == cloudName) > -1
            ) {
            } else if (user && !user.status_subsc) {
              setOpenModal(true)
              setSelectedModal("subsc")
              setSelectedGraph(cloudName)
              setSelectedDoc(link)
              setSelectedGrapPrice(stripePrice)
            } else {
              setOpenModal(true)
              setSelectedModal("add")
              setSelectedGraph(cloudName)
              setSelectedDoc(link)
              console.log("ajouter")
            }
          }}
        >
          <Span
            theme={{
              selected:
                user &&
                user.subsc.findIndex(x => x.graphname == cloudName) > -1,
            }}
          >
            {!user
              ? formatMessage(WORD_FooterNewsletterSubscribe)
              : user && !user.status_subsc
              ? formatMessage(WORD_FooterNewsletterSubscribe)
              : t.button.add}
          </Span>
        </ButtonContainerSub>
      </BlockButton>
    </VizContainer>
  )
}

export default VizCard
