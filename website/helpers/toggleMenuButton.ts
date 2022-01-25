import { Dispatch, MouseEvent, SetStateAction } from "react"

export function toggleMenuButton(
  e: MouseEvent<HTMLDivElement>,
  openMenu: Boolean,
  setOpenMenu: Dispatch<SetStateAction<boolean>>
) {
  e.preventDefault()
  if (!openMenu) {
    e.currentTarget.classList.add("open")
    setOpenMenu(true)
  } else {
    e.currentTarget.classList.remove("open")
    setOpenMenu(false)
  }
}
