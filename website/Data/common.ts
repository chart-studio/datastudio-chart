export const navBar = {
  link1: { fr: "Accueil", en: "Home" },
  link2: { fr: "Tarifs", en: "Pricing" },
  link3: { fr: "A propos", en: "About" },
  link4: { fr: "Contact", en: "Contact" },
}

export const seo = {
  name: "Beautiful Dashboards",
  title: {
    fr: "Donnez plus de percutant à vos dashboards",
    en: "Make your data shine with beautiful designs",
  },
}

export const hero_section = {
  title: "Beautiful Dashboards",
  option1: { fr: "Designs exceptionnels", en: "Exceptional designs" },
  option2: { fr: "Graphes paramétrables", en: "Customable graph" },
  option3: {
    fr: "30 credits à utiliser gratuitement*",
    en: "30 credits free to use*",
  },
}

export const button = {
  doc: { fr: "Lire", en: "Read" },
  essai: { fr: "Essayer", en: "Try" },
  sousc: { fr: "Souscrire", en: "Subscribe" },
  share: { fr: "Partager", en: "Share" },
  account: { fr: "Se connecter avec google", en: "Connect with google" },
}

export const tooltip = {
  doc: { fr: "Lire la documentation", en: "Read the documentation" },
  essai: { fr: "Utiliser les crédits", en: "Use credits" },
}

export const autreText = {
  add: { fr: "Ajouté le ", en: "Add on " },
}

export const recap = {
  credit: { fr: "crédits", en: "credits" },
  subsc: { fr: "souscriptions", en: "subscriptions" },
}

export const docPage = {
  titreData: { fr: "Donnée", en: "Data" },
  titreSubData: { fr: "Valeurs", en: "Inputs" },
}

export const credits = {
  title: { fr: "Crédits", en: "Credits" },
  descTest: {
    fr: "Les fichiers sont des adaptations du travail des personnes beaucoup plus intelligentes que moi, que je remodèle pour pouvoir les utiliser dans mes projets.",
    en: "The files are adaptations of the work of people much smarter than me, which I remodel to use in my projects.",
  },
  lienTitle: { fr: "Liens", en: "Links" },
}

export const modalText = {
  connect: {
    fr: "Désolé, veuillez-vous connecter!!",
    en: "Please, connect first!!",
  },
  allcreditused: {
    fr: "Désolé, vos crédits sont épuisés",
    en: "Sorry, You don't have crédits anymore",
  },
  try: {
    fr: "Utiliser 10 credits ",
    en: "Use 10 credits ",
  },
  tryConfirm: {
    fr: "Vous avez utilisé 10 credits",
    en: "You used 10 credits",
  },
  subsc: {
    fr: "Souhaiter vous souscrire",
    en: "Do you want to subscribe",
  },
  subscConfirm: {
    fr: "Génial vous avez souscrit",
    en: "Great! You subscribed",
  },
  button: {
    cancel: { fr: "Annuler", en: "Cancel" },
    tryNext: { fr: "Continuer", en: "Continue" },
    tryNextDocs: { fr: "Lire la doc", en: "Read doc" },
    error: { fr: "Recharger", en: "Reload" },
  },
}

//{fr:"",en:""}

export const charts = [
  {
    cloudName: "funnel_one",
    id: "1",
    name: { fr: "Graphique en entonnoir", en: "Funnel chart" },
    link_image: "/Graphs/funnel-light-1.PNG",
    desc: {
      fr: "Le graphique en entonnoir vous aide à voir rapidement où existent les taux d'abandon et les taux de conversion globaux dans votre tunnel.",
      en: "Funnel visualizations help you quickly see where drop-off rates and overall conversion rates in your stepped process exist.",
    },
    addedAt: "2022-01-23",
    link_page: "/",
    vizTool: "Data Studio",
    chartComponent: "FunnelChart1",
    source: {
      credits: [
        {
          title: "FunnelGraph.js - Greghvns",
          link: "https://www.npmjs.com/package/funnel-graph-js",
        },
      ],
    },
    data: [
      {
        labels: ["Impressions"],
        effectif: [12000],
      },
      {
        labels: ["Add To Cart"],
        effectif: [5700],
      },
      {
        labels: ["Buy"],
        effectif: [360],
      },
    ],
    stripeInfo: {
      priceId: "price_1KMEAKIi2iSop16uAoQcCkEh",
    },
  },
  {
    cloudName: "timebrush_one",
    id: "2",
    name: { fr: "Graphique en entonnoir (dark)", en: "Funnel chart (dark)" },
    link_image: "/Graphs/Beautiful-SVG-Funnel.png",
    desc: {
      fr: "Le graphique en entonnoir vous aide à voir rapidement où existent les taux d'abandon et les taux de conversion globaux dans votre tunnel.",
      en: "Funnel visualizations help you quickly see where drop-off rates and overall conversion rates in your stepped process exist.",
    },
    addedAt: "2022-01-24",
    link_page: "/",
    vizTool: "Data Studio",
    chartComponent: "FunnelChart2",
    source: {
      credits: [
        {
          title: "FunnelGraph.js - Greghvns",
          link: "https://www.npmjs.com/package/funnel-graph-js",
        },
      ],
    },
    data: [
      {
        labels: ["Impressions"],
        effectif: [12000],
      },
      {
        labels: ["Add To Cart"],
        effectif: [5700],
      },
      {
        labels: ["Buy"],
        effectif: [360],
      },
    ],
    stripeInfo: {
      priceId: "price_1KMEB3Ii2iSop16uMc9qN2uV",
    },
  },
]
