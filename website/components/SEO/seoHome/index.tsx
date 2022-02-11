import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import { locale } from "../../../@types/interface"
import translatedWords from "../../../helpers/translatedWords"
import infoSite from "../../../infos/infoSite"

// inspecter ce site pour plus : https://www.seowerkz.com/
// https://prerender.io/structured-data-for-seo/
const SeoHome = ({ title, noIndex }: { title: string; noIndex?: boolean }) => {
  const router = useRouter()
  const { locale } = router as { locale: locale }
  const t = translatedWords(locale)
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="canonical" href={infoSite(locale).url}></link>
      <meta name="description" content={infoSite(locale).description}></meta>
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <title>{`${title} | ${infoSite(locale).name}`}</title>
      <meta property="og:url" content={infoSite(locale).url} key="ogurl" />
      <meta
        property="og:image"
        content={infoSite(locale).image}
        key="ogimage"
      />
      <meta property="og:type" content="website" key="ogtype" />
      <meta
        property="og:site_name"
        content={infoSite(locale).name}
        key="ogsitename"
      />
      <meta
        property="og:title"
        content={infoSite(locale).title}
        key="ogtitle"
      />
      <meta
        property="og:description"
        content={infoSite(locale).description}
        key="ogdesc"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={infoSite(locale).image} />
      <meta property="og:locale" content={infoSite(locale).content} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: infoSite(locale).name,
                    item: `${infoSite(locale).url}`,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: t.navbar.link2,
                    item: `${infoSite(locale).url}/faq`,
                  },
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: infoSite(locale).name,
                    item: `${infoSite(locale).url}`,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: t.navbar.link3,
                    item: `${infoSite(locale).url}/library`,
                  },
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: infoSite(locale).name,
                    item: `${infoSite(locale).url}`,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: t.navbar.link4,
                    item: `${infoSite(locale).url}/pricing`,
                  },
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: infoSite(locale).name,
                    item: `${infoSite(locale).url}`,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: t.navbar.link5,
                    item: `${infoSite(locale).url}/contact`,
                  },
                ],
              },
            ],
          }),
        }}
      ></script>
    </Head>
  )
}

SeoHome.defaultProps = {
  noIndex: false,
}

export default SeoHome
