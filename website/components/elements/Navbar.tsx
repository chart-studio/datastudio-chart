import Link from "next/link"
import styled from "styled-components"
import { animated, useTransition, config } from "react-spring"
import { useRouter } from "next/router"
import { useEffect, useContext } from "react"
import { IntlContext } from "react-intl"
import { useDarkMode } from "../../hooks/useDarkMode"
import { useClickAway } from "../../hooks/useClickAway"
import ButtonLang from "./ButtonLang"
import ButtonLight from "./ButtonLight"
import ButtonMobMenu from "./ButtonMobMenu"
import ButtonAccount from "./ButtonAccount"
import Headroom from "react-headroom"
import { useAuth } from "../../hooks/useAuth"
import Logo from "../icon/Logo"
import {
  WORD_NavbarLink1,
  WORD_NavbarLink2,
  WORD_NavbarLink3,
  WORD_NavbarLink4,
  WORD_NavbarLink5,
} from "../../Dictionary"

const Header = styled.header`
  //min-height: 4rem;
  height: 4rem;
  @media (min-width: 48rem) {
    & {
      height: 4rem;
    }
  }
  position: sticky;
  top: 0;
  backdrop-filter: blur(20px);
  box-shadow: inset 0px 0px 1px var(--text2);
  z-index: 100;
`
const LogoWrapper = styled.div`
  position: relative;
`
const ContainerNav = styled.div`
  position: relative;
  z-index: 1;
  font-weight: 400;
`
const Menu = styled.ul`
  text-align: center;
  height: 100%;
`
const MenuMobWrapper = styled(animated.div)`
  z-index: -1;
  width: 100%;
  position: fixed;
  background-color: var(--surface1);
  @media (min-width: 48rem) {
    & {
      display: none;
    }
  }
`
const MenuMob = styled.div`
  left: 0;
  width: 100%;
  margin: auto;

  ul {
    width: 100%;
    padding: 0;
  }
`
const MenuMobNav = styled.ul`
  font-weight: 400;
`

const LinkPage = styled.li`
  font-weight: ${props => (props.theme.active ? "600" : null)};
  background-color: ${props =>
    props.theme.active ? "var(--surface3)" : "transparent"};
  letter-spacing: ${props => (props.theme.active ? "1.8px" : null)};
  opacity: 0.8;
  display: flex;
  position: relative;
  min-width: 5rem;
  text-align: center;
  align-items: center;
  user-select: none;

  @media (min-width: 48rem) {
    &&::after {
      content: "";
      display: block;
      position: absolute;
      width: ${props => (props.theme.active ? "100%" : "0%")};
      border-bottom: solid 2px var(--brand);
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      bottom: 0;
    }
    &&:hover::after {
      content: "";
      display: block;
      width: 100%;
      border-bottom: solid 2px var(--brand);
      bottom: 0;
    }
  }
`

const ContainerLogo = styled.div`
  display: inline-flex;
  span {
    display: none;
  }

  @media (min-width: 48rem) {
    span {
      display: flex;
      align-items: center;
    }
    margin-right: 1rem;
  }
`

const NavBar = () => {
  const { formatMessage } = useContext(IntlContext)
  const router = useRouter()
  const { user } = useAuth()
  let [statusDark, setStatusDark] = useDarkMode("", "statusDark")
  let { refControler, open, setOpen, refObject } = useClickAway(false)

  const transitions = useTransition(open, {
    from: { top: "-30rem" },
    enter: { top: "4rem" },
    leave: { top: "-30rem" },
    config: config.stiff,
  })
  useEffect(() => {
    console.log(router.pathname)
  }, [router])
  return (
    <>
      <Header>
        <ContainerNav className="container-nav">
          <LogoWrapper className="m-2">
            <Link href="/">
              <a rel="noopener noreferrer" href="/">
                <ContainerLogo>
                  <Logo />{" "}
                  <span>
                    <b>ChartStudio</b>
                  </span>
                </ContainerLogo>
              </a>
            </Link>
          </LogoWrapper>
          <div className="menu-desktop">
            <nav
              aria-label="navigation principale"
              tabIndex={0}
              style={{ height: "100%", position: "relative" }}
            >
              <Menu aria-haspopup="true">
                <Link href="/">
                  <LinkPage
                    className="pt-2 pb-2 navLink"
                    theme={{
                      active: router.pathname === "/",
                    }}
                  >
                    <a
                      href="/"
                      className="m-3"
                      rel="noopener noreferrer"
                      style={{ width: "100%" }}
                    >
                      {formatMessage(WORD_NavbarLink1)}
                    </a>
                  </LinkPage>
                </Link>
                <Link href="/faq">
                  <LinkPage
                    className="pt-2 pb-2 navLink"
                    theme={{
                      active: router.asPath.includes("/faq"),
                    }}
                  >
                    <a
                      href="#"
                      className="m-3"
                      rel="noopener noreferrer"
                      style={{ width: "100%" }}
                    >
                      {formatMessage(WORD_NavbarLink2)}
                    </a>
                  </LinkPage>
                </Link>
                <Link href="/library">
                  <LinkPage
                    className="pt-2 pb-2 navLink"
                    theme={{
                      active: router.asPath.includes("/library"),
                    }}
                  >
                    <a
                      href="#"
                      className="m-3"
                      rel="noopener noreferrer"
                      style={{ width: "100%" }}
                    >
                      {formatMessage(WORD_NavbarLink3)}
                    </a>
                  </LinkPage>
                </Link>
                <Link href="/pricing">
                  <LinkPage
                    className="pt-2 pb-2 navLink"
                    theme={{
                      active: router.asPath.includes("/pricing"),
                    }}
                  >
                    <a
                      href="#"
                      className="m-3"
                      rel="noopener noreferrer"
                      style={{ width: "100%" }}
                    >
                      {formatMessage(WORD_NavbarLink4)}
                    </a>
                  </LinkPage>
                </Link>
                {/* <Link href="/contact">
                  <LinkPage
                    className="pt-2 pb-2 navLink"
                    theme={{
                      active: router.asPath.includes("/contact"),
                    }}
                  >
                    <a
                      href="#"
                      className="m-3"
                      rel="noopener noreferrer"
                      style={{ width: "100%" }}
                    >
                      {formatMessage(WORD_NavbarLink5)}
                    </a>
                  </LinkPage>
                </Link> */}
              </Menu>
            </nav>
          </div>
          <div className="space-nav"></div>

          <ButtonLang className="m-3 br-4 button p-1" />
          <ButtonLight
            className="m-3 br-4 button p-1"
            statusDark={statusDark}
            setStatusDark={setStatusDark}
          />
          {user && <ButtonAccount url={user.photoURL!} />}
          <div ref={refControler}>
            <ButtonMobMenu nbLignes={2} openMenu={open} setOpenMenu={setOpen} />
          </div>
        </ContainerNav>
        {transitions(
          (styles, item) =>
            item && (
              <MenuMobWrapper
                className="box-shadow-1"
                style={styles}
                ref={refObject}
              >
                <MenuMob className="container-navMob">
                  <MenuMobNav aria-haspopup="true">
                    <Link href="/">
                      <LinkPage
                        className="pt-2 pb-2 navLink mt-2"
                        onClick={() => setOpen(false)}
                        theme={{
                          active: router.pathname === "/",
                        }}
                      >
                        <a className="m-3" rel="noopener noreferrer">
                          {formatMessage(WORD_NavbarLink1)}
                        </a>
                      </LinkPage>
                    </Link>
                    <Link href="/faq">
                      <LinkPage
                        className="pt-2 pb-2 navLink mt-2"
                        onClick={() => setOpen(false)}
                        theme={{
                          active: router.asPath.includes("/faq"),
                        }}
                      >
                        <a className="m-3" rel="noopener noreferrer">
                          {formatMessage(WORD_NavbarLink2)}
                        </a>
                      </LinkPage>
                    </Link>
                    <Link href="/library">
                      <LinkPage
                        className="pt-2 pb-2 navLink mt-2"
                        onClick={() => setOpen(false)}
                        theme={{
                          active: router.asPath.includes("/library"),
                        }}
                      >
                        <a className="m-3" rel="noopener noreferrer">
                          {formatMessage(WORD_NavbarLink3)}
                        </a>
                      </LinkPage>
                    </Link>
                    <Link href="/pricing">
                      <LinkPage
                        className="pt-2 pb-2 navLink"
                        onClick={() => setOpen(false)}
                        theme={{
                          active: router.asPath.includes("/pricing"),
                        }}
                      >
                        <a className="m-3" rel="noopener noreferrer">
                          {formatMessage(WORD_NavbarLink4)}
                        </a>
                      </LinkPage>
                    </Link>
                    {/* <Link href="/contact">
                      <LinkPage
                        className="pt-2 pb-2 navLink"
                        onClick={() => setOpen(false)}
                        theme={{
                          active: router.asPath.includes("/contact"),
                        }}
                      >
                        <a className="m-3" rel="noopener noreferrer">
                          {formatMessage(WORD_NavbarLink5)}
                        </a>
                      </LinkPage>
                    </Link> */}
                  </MenuMobNav>
                </MenuMob>
              </MenuMobWrapper>
            )
        )}
      </Header>
    </>
  )
}

export default NavBar
