import {
  hero_section,
  navBar,
  seo,
  charts,
  button,
  tooltip,
  autreText,
  recap,
  docPage,
  credits,
  modalText,
} from "../../Data/common"
export default {
  button: {
    doc: button.doc["en"],
    essai: button.essai["en"],
    sousc: button.sousc["en"],
    account: button.account["en"],
    share: button.share["en"],
  },
  tooltip: {
    doc: tooltip.doc["en"],
    essai: tooltip.essai["en"],
  },
  autreText: {
    add: autreText.add["en"],
  },
  navbar: {
    link1: navBar.link1["en"],
    link2: navBar.link2["en"],
    link3: navBar.link3["en"],
    link4: navBar.link4["en"],
  },
  recap: {
    credit: recap.credit["en"],
    subsc: recap.subsc["en"],
  },
  seo: {
    name: seo.name,
    title: seo.title["en"],
  },
  hero_section: {
    title: hero_section.title,
    option1: hero_section.option1["en"],
    option2: hero_section.option2["en"],
    option3: hero_section.option3["en"],
  },
  docPage: {
    titreData: docPage.titreData["en"],
    titreSubData: docPage.titreSubData["en"],
  },
  modalText: {
    connect: modalText.connect["en"],
    try: modalText.try["en"],
    tryConfirm: modalText.tryConfirm["en"],
    subsc: modalText.subsc["en"],
    subscConfirm: modalText.subscConfirm["en"],
    allcreditused: modalText.allcreditused["en"],
    button: {
      cancel: modalText.button.cancel["en"],
      tryNext: modalText.button.tryNext["en"],
      tryNextDocs: modalText.button.tryNextDocs["en"],
      error: modalText.button.error["en"],
    },
  },
  credits: {
    title: credits.title["en"],
    descTest: credits.descTest["en"],
    lienTitle: credits.lienTitle["en"],
  },
  charts: charts.map(val => {
    return { ...val, name: val.name["en"], desc: val.desc["en"] }
  }),
}
