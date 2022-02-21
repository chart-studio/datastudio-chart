import { locale } from "../@types/interface"
import en from "../locales/en/index"
import fr from "../locales/fr/index"

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
