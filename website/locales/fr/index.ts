import {
  hero_section,
  navBar,
  seo,
  charts,
  button,
  tooltip,
  autreText,
  recap,
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
  charts: charts.map(val => {
    return { ...val, name: val.name["fr"], desc: val.desc["fr"] }
  }),
}
