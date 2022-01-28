import DropdownAcc from "./DropdownAcc"
import { InterButtonAccount } from "../../@types/interface"
import styled from "styled-components"
import { useClickAway } from "../../hooks/useClickAway"
import { useRouter } from "next/router"

const DivWrapper = styled.div`
  position: relative;

  .imgcontainer {
    width: 2.2rem;
    height: 2.2rem;
    border: ${props => (props.theme.active ? "solid 2px var(--brand)" : null)};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ButtonAccount = ({ url }: InterButtonAccount) => {
  let { open, setOpen, refControler, refObject } = useClickAway(false)
  const router = useRouter()
  return (
    <DivWrapper
      className="m-3 br-4 button "
      theme={{
        active: router.asPath.includes("/account"),
      }}
    >
      <div
        className="imgcontainer br-4"
        ref={refControler}
        onClick={() => setOpen(true)}
      >
        <img
          src={
            url && !url.includes("googleuserconte")
              ? url
              : "https://res.cloudinary.com/lokalistic/image/upload/v1639748870/Lokalistic/profiles/no_image_imy7e8.png"
          }
          alt="Profil"
          className="br-4"
        />
      </div>

      {!open ? null : (
        <DropdownAcc refObject={refObject} setOpen={setOpen} open={open} />
      )}
    </DivWrapper>
  )
}

export default ButtonAccount
