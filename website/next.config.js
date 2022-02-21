const path = require("path")

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  images: {
    domains: ["https://chart-studio.com", "deau-dash-website.vercel.app"],
  },
}
