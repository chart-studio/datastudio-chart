import {
  AppPropsType,
  AppType,
  RenderPageResult,
} from "next/dist/shared/lib/utils"
import Document, { Head, Html, Main, NextScript } from "next/document"
import { ReactElement } from "react"
import { ServerStyleSheet } from "styled-components"
import { SVG } from "../components/icon/SVG"

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
        originalRenderPage({
          enhanceApp:
            (App: AppType) =>
            (props: AppPropsType): ReactElement =>
              sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            href="/logo/logo.ico"
            type="image/x-icon"
            sizes="any"
          />
          <link rel="icon" href="/logo/logo.svg" type="image/svg-xml" />
        </Head>
        <body>
          <SVG />
          <Main />
          <div id="portal-root"></div>
          <NextScript />
        </body>
      </Html>
    )
  }
}
