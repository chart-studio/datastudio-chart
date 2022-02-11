import { Dispatch, InputHTMLAttributes, SetStateAction } from "react"
import styled from "styled-components"

interface Div extends InputHTMLAttributes<HTMLDivElement> {
  nbLignes?: 2 | 3
  selectorMenuMob?: string
  openMenu: boolean
}

const MenuMobWrapper = styled.div`
  cursor: pointer;

  .menu_burger {
    width: 1.4rem;
    height: 0.125rem;
    background: ${props =>
      props.theme.nbLignes === 3 ? "var(--text1)" : "transparent"};
    transition: all var(--speed) ease-in-out;
  }

  .menu_burger::before,
  .menu_burger::after {
    content: "";
    position: absolute;
    width: 1.4rem;
    height: 0.125rem;
    background: var(--text1);
    transition: all var(--speed) ease-in-out;
    border-radius: 2px;
  }

  .menu_burger::before {
    transform: ${props =>
      props.theme.nbLignes === 3 ? "translateY(-6px)" : "translateY(-4px)"};
  }
  .menu_burger::after {
    transform: ${props =>
      props.theme.nbLignes === 3 ? "translateY(6px)" : "translateY(4px)"};
  }

  .btn-mob-nav.open .menu_burger {
    background: transparent;
  }

  .btn-mob-nav.open .menu_burger::before {
    transform: rotate(45deg);
  }
  .btn-mob-nav.open .menu_burger::after {
    transform: rotate(-45deg);
  }
`

const CloseButton = ({ nbLignes, openMenu, ...props }: Div) => {
  return (
    <>
      <MenuMobWrapper theme={{ nbLignes }}>
        <div className={`btn-mob-nav ${openMenu ? "open" : ""}`} {...props}>
          <div className="br-1 menu_burger"></div>
        </div>
      </MenuMobWrapper>
    </>
  )
}

CloseButton.defaultProps = {
  nbLignes: 2,
}

export default CloseButton
