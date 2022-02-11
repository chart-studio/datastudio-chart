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
  footer,
  how_section,
  faq_section,
  pricing,
} from "../../Data/common"
export default {
  button: {
    doc: button.doc["en"],
    essai: button.essai["en"],
    sousc: button.sousc["en"],
    account: button.account["en"],
    share: button.share["en"],
    add: button.add["en"],
    added: button.added["en"],
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
    link5: navBar.link5["en"],
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
    option4: hero_section.option4["en"],
  },
  how_section: {
    title: how_section.title["en"],
    block1: {
      title: how_section.block1.title["en"],
      content: how_section.block1.content["en"],
    },
    block2: {
      title: how_section.block2.title["en"],
      content: how_section.block2.content["en"],
    },
    block3: {
      title: how_section.block3.title["en"],
      content: how_section.block3.content["en"],
    },
    block4: {
      title: how_section.block4.title["en"],
      content: how_section.block4.content["en"],
      linkName: how_section.block4.linkName["en"],
    },
  },
  faq_section: {
    title: faq_section.title["en"],
    question1: {
      question: faq_section.question1.question["en"],
      response: {
        exclamation: faq_section.question1.response.exclamation["en"],
        response: faq_section.question1.response.response["en"],
      },
    },
    question2: {
      question: faq_section.question2.question["en"],
      response: {
        exclamation: faq_section.question2.response.exclamation["en"],
        response: faq_section.question2.response.response["en"],
      },
    },
    question3: {
      question: faq_section.question3.question["en"],
      response: {
        exclamation: faq_section.question3.response.exclamation["en"],
        response: faq_section.question3.response.response["en"],
      },
    },
    question4: {
      question: faq_section.question4.question["en"],
      response: {
        exclamation: faq_section.question4.response.exclamation["en"],
        response: faq_section.question4.response.response["en"],
      },
    },
    question5: {
      question: faq_section.question5.question["en"],
      response: {
        exclamation: faq_section.question5.response.exclamation["en"],
        response: faq_section.question5.response.response["en"],
      },
    },
    question6: {
      question: faq_section.question6.question["en"],
      response: {
        exclamation: faq_section.question6.response.exclamation["en"],
        response: faq_section.question6.response.response["en"],
      },
    },
  },
  pricing: {
    blockPrice1: {
      title: pricing.blockPrice1.title["en"],
      price: pricing.blockPrice1.price["en"],
      currency: pricing.blockPrice1.currency["en"],
      text1: pricing.blockPrice1.text1["en"],
      text2: pricing.blockPrice1.text2["en"],
    },
    blockPrice2: {
      title: pricing.blockPrice2.title["en"],
      price: pricing.blockPrice2.price["en"],
      currency: pricing.blockPrice2.currency["en"],
      text1: pricing.blockPrice2.text1["en"],
    },
  },
  docPage: {
    titreData: docPage.titreData["en"],
    titreSubData: docPage.titreSubData["en"],
    titreSubData2: docPage.titreSubData2["en"],
  },
  modalText: {
    connect: modalText.connect["en"],
    try: modalText.try["en"],
    tryConfirm: modalText.tryConfirm["en"],
    subsc: modalText.subsc["en"],
    subscConfirm: modalText.subscConfirm["en"],
    allcreditused: modalText.allcreditused["en"],
    add: modalText.add["en"],
    button: {
      cancel: modalText.button.cancel["en"],
      tryNext: modalText.button.tryNext["en"],
      tryNextAdd: modalText.button.tryNextAdd["en"],
      tryNextDocs: modalText.button.tryNextDocs["en"],
      error: modalText.button.error["en"],
      copy: modalText.button.copy["en"],
      copied: modalText.button.copied["en"],
      unsubscribe: modalText.button.unsubscribe["en"],
      unsubscribeNext: modalText.button.unsubscribeNext["en"],
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
  footer: {
    BlocLogo: {
      title: footer.BlocLogo.title["en"],
      desc: footer.BlocLogo.desc["en"],
      spamsDesc: footer.BlocLogo.spamsDesc["en"],
      buttonSubsc: footer.BlocLogo.buttonSubsc["en"],
      buttonOk: footer.BlocLogo.buttonOk["en"],
    },
    BlocLinks: {
      titleGroup1: footer.BlocLinks.titleGroup1["en"],
      link1: footer.BlocLinks.link1["en"],
      link2: footer.BlocLinks.link2["en"],
      link3: footer.BlocLinks.link3["en"],
      link4: footer.BlocLinks.link4["en"],
      link5: footer.BlocLinks.link5["en"],
    },
    copyright: {
      liaison: footer.copyright.liaison["en"],
    },
    endline: {
      link1: footer.endline.link1["en"],
      link2: footer.endline.link2["en"],
      link3: footer.endline.link3["en"],
    },

    tool: footer.tool["en"],
  },
}
