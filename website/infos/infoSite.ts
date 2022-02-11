import { locale } from "../@types/interface"

const infoSite = (locale: locale) => {
  return {
    name: "Chart studio",
    title: "Chart studio",
    description: infoSite_common[`description_${locale}`],
    descriptionShare: infoSite_common[`descriptionShare_${locale}`],
    url: infoSite_common[`url_${locale}`],
    content: infoSite_common[`content_${locale}`],
    image: infoSite_common[`url_${locale}`] + "/logo/logo.png",
    urlShare: infoSite_common[`urlShare_${locale}`],
    bodyMail: infoSite_common[`bodyMail_${locale}`],
  }
}

const infoSite_common = {
  description_fr: "Allez au delà des présentations de données basiques",
  description_en: "Go beyond a simple data présentation",
  descriptionShare_fr: "Créer+des+graphiques+uniques",
  descriptionShare_en: "Create+unique+graphs",
  url_en: process.env.NEXT_PUBLIC_SITENAME,
  url_fr: `${process.env.NEXT_PUBLIC_SITENAME}/fr`,
  urlShare_en: "https%3A%2F%2Fchart-studio.com%2F",
  urlShare_fr: "https%3A%2F%2Fchart-studio.com%2Ffr",
  content_fr: "fr_FR",
  content_en: "en_EN",
  bodyMail_fr: "Bienvenu sur ChartStudio",
  bodyMail_en: "Welcome to ChartStudio",
}

export default infoSite
