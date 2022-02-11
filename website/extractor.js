const {
  GettextExtractor,
  JsExtractors,
  HtmlExtractors,
} = require("gettext-extractor")

let extractor = new GettextExtractor()

extractor
  .createJsParser([
    JsExtractors.callExpression("getText", {
      arguments: {
        text: 0,
        context: 1,
      },
    }),
    JsExtractors.callExpression("getPlural", {
      arguments: {
        text: 1,
        textPlural: 2,
        context: 3,
      },
    }),
  ])
  .parseFilesGlob("./pages/**/*.@(ts|js|tsx|jsx)")
//.parseFilesGlob("./Data/common.ts")
extractor
  .createHtmlParser([HtmlExtractors.elementContent("translate, [translate]")])
  .parseFilesGlob("./src/**/*.html")
extractor.savePotFile("./messages.pot")

extractor.printStats()
