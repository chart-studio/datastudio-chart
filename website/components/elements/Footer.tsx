import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"
//import publicLogo from "../public/logo/Logo-Krakendata.png"
import { useRouter } from "next/router"

import getCurrentYear from "../../helpers/getCurrentYear"
import en from "../../locales/en"
import fr from "../../locales/fr"
import Facebook from "../icon/Facebook"
import Linkedin from "./Linkedin"
import ButtonSubscribe from "./ButtonSubscribe"
import Logo from "../icon/Logo"

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
  const { locale } = useRouter()
  const t = locale === "fr" ? fr : en
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
                  <strong>{t.footer.BlocLogo.title}</strong>
                  <div className="mb-3">{t.footer.BlocLogo.desc}</div>
                  <div>
                    <small>{t.footer.BlocLogo.spamsDesc}</small>
                  </div>
                  <div>
                    <ButtonSubscribe
                      titleName={t.footer.BlocLogo.buttonSubsc}
                      titleOk={t.footer.BlocLogo.buttonOk}
                    />
                  </div>
                </div>
              </Newsletter>
              <Company>
                <div className="company">
                  <strong>{t.footer.BlocLinks.titleGroup1}</strong>
                  <Block>
                    <Link href="/">
                      <a className="mt-2">{t.footer.BlocLinks.link1}</a>
                    </Link>
                    <Link href="/faq">
                      <a href="#">{t.footer.BlocLinks.link2}</a>
                    </Link>
                    <Link href="/library">
                      <a href="#">{t.footer.BlocLinks.link3}</a>
                    </Link>
                    <Link href="/pricing">
                      <a href="#">{t.footer.BlocLinks.link4}</a>
                    </Link>
                  </Block>
                </div>
              </Company>
            </Newsletter_company>
            <Copyright_socialLinks>
              <Copyright>
                Copyright © 2022{getCurrentYear(2022)} -{" "}
                {`${t.footer.copyright.liaison} `}
                <span>
                  {/* {<a
                    href="https://lokalistic.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lokalistic
                  </a>} */}
                  <a href="/" target="" rel="noopener noreferrer">
                    Lokalistic
                  </a>
                </span>
              </Copyright>
              <SocialLinks>
                <Facebook link="" width="1.5rem" height="1.5rem" />
                <Linkedin link="" width="1.5rem" height="1.5rem" />
              </SocialLinks>
            </Copyright_socialLinks>
            <Legal>
              <Link href="/">
                <a>{t.footer.endline.link1}</a>
              </Link>
              <Link href="/">
                <a className="cond_gene">{t.footer.endline.link2}</a>
              </Link>
              <Link href="/">
                <a>{t.footer.endline.link3}</a>
              </Link>
            </Legal>
          </FooterDiv>
        </div>
      </ContainerWrapper>
    </>
  )
}

export default Footer
