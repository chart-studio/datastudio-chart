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
    doc: button.doc["fr"],
    essai: button.essai["fr"],
    sousc: button.sousc["fr"],
    account: button.account["fr"],
    share: button.share["fr"],
    add: button.add["fr"],
    added: button.added["fr"],
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
    link5: navBar.link5["fr"],
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
    option4: hero_section.option4["fr"],
  },
  how_section: {
    title: how_section.title["fr"],
    block1: {
      title: how_section.block1.title["fr"],
      content: how_section.block1.content["fr"],
    },
    block2: {
      title: how_section.block2.title["fr"],
      content: how_section.block2.content["fr"],
    },
    block3: {
      title: how_section.block3.title["fr"],
      content: how_section.block3.content["fr"],
    },
    block4: {
      title: how_section.block4.title["fr"],
      content: how_section.block4.content["fr"],
      linkName: how_section.block4.linkName["fr"],
    },
  },
  faq_section: {
    title: faq_section.title["fr"],
    question1: {
      question: faq_section.question1.question["fr"],
      response: {
        exclamation: faq_section.question1.response.exclamation["fr"],
        response: faq_section.question1.response.response["fr"],
      },
    },
    question2: {
      question: faq_section.question2.question["fr"],
      response: {
        exclamation: faq_section.question2.response.exclamation["fr"],
        response: faq_section.question2.response.response["fr"],
      },
    },
    question3: {
      question: faq_section.question3.question["fr"],
      response: {
        exclamation: faq_section.question3.response.exclamation["fr"],
        response: faq_section.question3.response.response["fr"],
      },
    },
    question4: {
      question: faq_section.question4.question["fr"],
      response: {
        exclamation: faq_section.question4.response.exclamation["fr"],
        response: faq_section.question4.response.response["fr"],
      },
    },
    question5: {
      question: faq_section.question5.question["fr"],
      response: {
        exclamation: faq_section.question5.response.exclamation["fr"],
        response: faq_section.question5.response.response["fr"],
      },
    },
    question6: {
      question: faq_section.question6.question["fr"],
      response: {
        exclamation: faq_section.question6.response.exclamation["fr"],
        response: faq_section.question6.response.response["fr"],
      },
    },
  },

  pricing: {
    blockPrice1: {
      title: pricing.blockPrice1.title["fr"],
      price: pricing.blockPrice1.price["fr"],
      currency: pricing.blockPrice1.currency["fr"],
      text1: pricing.blockPrice1.text1["fr"],
      text2: pricing.blockPrice1.text2["fr"],
    },
    blockPrice2: {
      title: pricing.blockPrice2.title["fr"],
      price: pricing.blockPrice2.price["fr"],
      currency: pricing.blockPrice2.currency["fr"],
      text1: pricing.blockPrice2.text1["fr"],
    },
  },

  docPage: {
    titreData: docPage.titreData["fr"],
    titreSubData: docPage.titreSubData["fr"],
    titreSubData2: docPage.titreSubData2["fr"],
  },
  modalText: {
    connect: modalText.connect["fr"],
    try: modalText.try["fr"],
    tryConfirm: modalText.tryConfirm["fr"],
    subsc: modalText.subsc["fr"],
    subscConfirm: modalText.subscConfirm["fr"],
    allcreditused: modalText.allcreditused["fr"],
    add: modalText.add["fr"],
    button: {
      cancel: modalText.button.cancel["fr"],
      tryNext: modalText.button.tryNext["fr"],
      tryNextAdd: modalText.button.tryNextAdd["fr"],
      tryNextDocs: modalText.button.tryNextDocs["fr"],
      error: modalText.button.error["fr"],
      copy: modalText.button.copy["fr"],
      copied: modalText.button.copied["fr"],
      unsubscribe: modalText.button.unsubscribe["fr"],
      unsubscribeNext: modalText.button.unsubscribeNext["fr"],
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
  footer: {
    BlocLogo: {
      title: footer.BlocLogo.title["fr"],
      desc: footer.BlocLogo.desc["fr"],
      spamsDesc: footer.BlocLogo.spamsDesc["fr"],
      buttonSubsc: footer.BlocLogo.buttonSubsc["fr"],
      buttonOk: footer.BlocLogo.buttonOk["fr"],
    },
    BlocLinks: {
      titleGroup1: footer.BlocLinks.titleGroup1["fr"],
      link1: footer.BlocLinks.link1["fr"],
      link2: footer.BlocLinks.link2["fr"],
      link3: footer.BlocLinks.link3["fr"],
      link4: footer.BlocLinks.link4["fr"],
      link5: footer.BlocLinks.link5["fr"],
    },
    copyright: {
      liaison: footer.copyright.liaison["fr"],
    },
    endline: {
      link1: footer.endline.link1["fr"],
      link2: footer.endline.link2["fr"],
      link3: footer.endline.link3["fr"],
    },

    tool: footer.tool["fr"],
  },
}
