import { locale } from "../@types/interface"
import en from "../locales/en"
import fr from "../locales/fr"

const translatedWords = (locale: locale) => {
  if (locale === "fr") {
    return fr
  }
  if (locale === "en") {
    return en
  }
  return en
}

export default translatedWords
