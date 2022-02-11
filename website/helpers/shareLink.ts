import { Dispatch, SetStateAction } from "react"
import infoSite from "../infos/infoSite"

const shareLink = (
  setOpen: Dispatch<SetStateAction<boolean>>,
  setDisplayShare: Dispatch<SetStateAction<string>>,
  locale: "fr" | "en",
  link: string,
  setSelectedDoc: Dispatch<SetStateAction<string>>
) => {
  return () => {
    if (navigator.share) {
      navigator
        .share({
          title: infoSite(locale).title,
          text: infoSite(locale).description,
          url: link,
        })
        .then(() => {
          console.log("Thanks for sharing!")
        })
        .catch(console.error)
    } else {
      setSelectedDoc(link)
      setOpen(true)
      setDisplayShare("share")
    }
  }
}

export default shareLink
