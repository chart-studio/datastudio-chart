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
    doc: button.doc["fr"],
    essai: button.essai["fr"],
    sousc: button.sousc["fr"],
    account: button.account["fr"],
    share: button.share["fr"],
  },
  tooltip: {
    doc: tooltip.doc["fr"],
    essai: tooltip.essai["fr"],
  },
  autreText: {
    add: autreText.add["fr"],
  },
  navbar: {
    link1: navBar.link1["fr"],
    link2: navBar.link2["fr"],
    link3: navBar.link3["fr"],
    link4: navBar.link4["fr"],
  },
  recap: {
    credit: recap.credit["fr"],
    subsc: recap.subsc["fr"],
  },
  seo: {
    name: seo.name,
    title: seo.title["fr"],
  },
  hero_section: {
    title: hero_section.title,
    option1: hero_section.option1["fr"],
    option2: hero_section.option2["fr"],
    option3: hero_section.option3["fr"],
  },
  docPage: {
    titreData: docPage.titreData["fr"],
    titreSubData: docPage.titreSubData["fr"],
  },
  modalText: {
    connect: modalText.connect["fr"],
    try: modalText.try["fr"],
    tryConfirm: modalText.tryConfirm["fr"],
    subsc: modalText.subsc["fr"],
    subscConfirm: modalText.subscConfirm["fr"],
    allcreditused: modalText.allcreditused["fr"],
    button: {
      cancel: modalText.button.cancel["fr"],
      tryNext: modalText.button.tryNext["fr"],
      tryNextDocs: modalText.button.tryNextDocs["fr"],
      error: modalText.button.error["fr"],
    },
  },
  credits: {
    title: credits.title["fr"],
    descTest: credits.descTest["fr"],
    lienTitle: credits.lienTitle["fr"],
  },
  charts: charts.map(val => {
    return { ...val, name: val.name["fr"], desc: val.desc["fr"] }
  }),
}
