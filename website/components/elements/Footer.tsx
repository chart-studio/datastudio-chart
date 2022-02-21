import styled from "styled-components"
import Link from "next/link"
import getCurrentYear from "../../helpers/getCurrentYear"
import Facebook from "../icon/Facebook"
import Linkedin from "./Linkedin"
import ButtonSubscribe from "./ButtonSubscribe"
import Logo from "../icon/Logo"
import { useContext } from "react"
import { IntlContext } from "react-intl"
import {
  WORD_FooterAccessibity,
  WORD_FooterConfidentialityCookies,
  WORD_FooterCopyRight,
  WORD_FooterGeneralCondi,
  WORD_FooterNewsletterNoSpams,
  WORD_FooterNewsletterSubscribe,
  WORD_FooterNewsletterSubscribeOk,
  WORD_FooterNewsletterTitle,
  WORD_FooterNewsletterTitle2,
  WORD_FooterNewsletterWebsite,
  WORD_NavbarLink1,
  WORD_NavbarLink2,
  WORD_NavbarLink3,
  WORD_NavbarLink4,
} from "../../Dictionary"
import Slack from "../icon/Slack"

const ContainerWrapper = styled.div`
  background-color: var(--surface3);
  margin-top: 2rem;
`
const FooterDiv = styled.footer`
  display: block;
`
const Newsletter_company = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: solid 1px var(--surface4);

  @media (min-width: 48rem) {
    text-align: left;
    grid-template-columns: 3fr 1fr;
  }
`
const Newsletter = styled.div`
  max-inline-size: 30ch;
  padding-top: 2rem;
  padding-bottom: 2rem;
  small {
    color: var(--text2);
  }
`
const Company = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`
const Copyright_socialLinks = styled.div`
  font-size: var(--font-size-small);
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
`
const Copyright = styled.div``
const SocialLinks = styled.div``
const Legal = styled.div`
  font-size: var(--font-size-small);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  align-items: center;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  border-top: solid 1px var(--surface4);
  .cond_gene {
    border-left: 1px solid var(--surface4);
    border-right: 1px solid var(--surface4);
  }
`
const Block = styled.div`
  &:first-child {
  }
  a {
    display: block;
  }
`
const ContainerLogo = styled.div`
  display: inline-flex;

  span {
    display: flex;
    align-items: center;
  }
  margin-right: 1rem;
`

const Footer = () => {
  const { formatMessage } = useContext(IntlContext)
  return (
    <>
      <ContainerWrapper>
        <div className="container">
          <FooterDiv>
            <Newsletter_company>
              <Newsletter>
                <ContainerLogo>
                  <Logo />{" "}
                  <span>
                    <b>ChartStudio</b>
                  </span>
                </ContainerLogo>

                <div>
                  <strong>{formatMessage(WORD_FooterNewsletterTitle)}</strong>
                  <div className="mb-3">
                    {formatMessage(WORD_FooterNewsletterTitle2)}
                  </div>
                  <div>
                    <small>{formatMessage(WORD_FooterNewsletterNoSpams)}</small>
                  </div>
                  <div>
                    <ButtonSubscribe
                      titleName={formatMessage(WORD_FooterNewsletterSubscribe)}
                      titleOk={formatMessage(WORD_FooterNewsletterSubscribeOk)}
                    />
                  </div>
                </div>
              </Newsletter>
              <Company>
                <div className="company">
                  <strong>{formatMessage(WORD_FooterNewsletterWebsite)}</strong>
                  <Block>
                    <Link href="/">
                      <a className="mt-2">{formatMessage(WORD_NavbarLink1)}</a>
                    </Link>
                    <Link href="/faq">
                      <a href="#">{formatMessage(WORD_NavbarLink2)}</a>
                    </Link>
                    <Link href="/library">
                      <a href="#">{formatMessage(WORD_NavbarLink3)}</a>
                    </Link>
                    <Link href="/pricing">
                      <a href="#">{formatMessage(WORD_NavbarLink4)}</a>
                    </Link>
                  </Block>
                </div>
              </Company>
            </Newsletter_company>
            <Copyright_socialLinks>
              <Copyright>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  {formatMessage(WORD_FooterCopyRight, {
                    year: `2022${getCurrentYear(2022)}`,
                  })}
                </a>
              </Copyright>
              <SocialLinks>
                {/* <Facebook link="/" width="1.5rem" height="1.5rem" /> */}
                {/* <Linkedin link="/" width="1.5rem" height="1.5rem" /> */}
                <a
                  href="https://join.slack.com/t/chartstudio/shared_invite/zt-13z6rsc39-5OZWm~YDUU37GZb6Kl_klA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="mt-2 ml-2">
                    <Slack width="1.5rem" height="1.5rem" />
                  </div>
                </a>
              </SocialLinks>
            </Copyright_socialLinks>
            <Legal>
              <Link href="/">
                <a>{formatMessage(WORD_FooterConfidentialityCookies)}</a>
              </Link>
              <Link href="/">
                <a className="cond_gene">
                  {formatMessage(WORD_FooterGeneralCondi)}
                </a>
              </Link>
              <Link href="/">
                <a>{formatMessage(WORD_FooterAccessibity)}</a>
              </Link>
            </Legal>
          </FooterDiv>
        </div>
      </ContainerWrapper>
    </>
  )
}

export default Footer
