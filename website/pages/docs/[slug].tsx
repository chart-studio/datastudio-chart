import { GetStaticPaths, GetStaticProps } from "next"
import React from "react"
import { locale, MDXDoc } from "../../@types/interface"
import { getDocFromSlug, getSlugs } from "../../lib/mdx"
import { serialize } from "next-mdx-remote/serialize"
import Head from "next/head"
import { MDXRemote } from "next-mdx-remote"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/atom-one-dark.css"
import styled from "styled-components"
import GraphsComponent from "../../components/GraphsComponents"
import { useRouter } from "next/router"
import en from "../../locales/en"
import fr from "../../locales/fr"
import RecapAccount from "../../components/elements/RecapAccount"
import { useAuth } from "../../hooks/useAuth"
import LinkHold from "../../components/elements/LinkHold"
const GridDocs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
    h2 {
      text-align: center;
    }
  }
  @media (max-width: 70rem) {
  }
  .hljs {
    background: var(--surface4);
    color: var(--text2);
    border-radius: 0.5rem;
  }
  h1,
  h2 {
    margin: 1rem 0;
  }
  h3,
  h4 {
    margin: 0.8rem 0;
  }
  h5,
  h6 {
    margin: 0.6rem 0;
  }
  p {
    margin-bottom: 0.5rem;
  }
`
const GraphContent = styled.div`
  height: calc(100vh - 4rem);
  @media (max-width: 48rem) {
    height: auto;
    position: initial;
    //margin-bottom: 1rem;
  }
  @media (max-width: 70rem) {
  }
  width: 100%;
  padding: 1rem;
  position: sticky;
  top: 4rem;
  display: flex;
  flex-direction: column;
`
const DocContent = styled.div`
  margin: 1rem;
`
const DataContent = styled.div`
  margin: 1rem 2rem 1rem 1rem;
  @media (max-width: 48rem) {
    margin: 1rem;
  }
  .tg {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }
  .tg td {
    border-color: var(--surface4);
    border-style: solid;
    border-width: 1px;
    overflow: hidden;
    padding: 10px 5px;
    word-break: normal;
  }
  .tg th {
    border-color: var(--surface4);
    background-color: var(--surface3);
    border-style: solid;
    border-width: 1px;
    font-weight: normal;
    overflow: hidden;
    padding: 10px 5px;
    word-break: normal;
  }
  .tg .tg-0lax {
    text-align: left;
    vertical-align: top;
  }
`

const GraphContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Space = styled.div`
  margin-top: auto;
`

const Credits = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--surface4);
  opacity: 0.8;
`

const Doc = ({ doc, locale }: { doc: MDXDoc; locale: locale }) => {
  const router = useRouter()
  const t = locale === "fr" ? fr : en
  const { user } = useAuth()
  return (
    <>
      <Head>
        <title>Beautiful design | Docs | {doc.meta.title}</title>
        <link
          rel="alternate"
          hrefLang={locale}
          href={locale === "fr" ? router.asPath : `/en${router.asPath}`}
        />
      </Head>
      <GridDocs>
        <GraphContent>
          <GraphContentWrapper>
            <h2>{doc.meta.title}</h2>
            <GraphsComponent val={doc.meta.chartInfo.chartComponent} />
            <LinkHold testLink={user?.trygraph[0].link || ""} />

            <Space />
            <Credits>
              <h6>{t.credits.title} 🦄</h6>
              <div>{t.credits.descTest}</div>
              <div>
                <b>
                  <br />
                  {t.credits.lienTitle}
                </b>
                <br />
                <ul>
                  {doc.meta.chartInfo.source.credits.map((credit, i) => (
                    <li>
                      {"-> "}
                      <a
                        href={credit.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {credit.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Credits>
          </GraphContentWrapper>
        </GraphContent>

        <DocContent>
          <MDXRemote {...doc.source} components={{}} />
        </DocContent>
        <DataContent>
          <h4>{t.docPage.titreData}</h4>
          <h6>{t.docPage.titreSubData}</h6>
          <table className="tg">
            <thead>
              <tr>
                {Object.keys(doc.meta.chartInfo.data[0]).map((label, i) => (
                  <th className="tg-0lax" key={i}>
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {doc.meta.chartInfo.data.map((row: any, i: number) => {
                return (
                  <tr key={i}>
                    {Object.keys(row).map((val: string, d: number) => (
                      <td
                        style={{ width: `${100 / Object.keys(row).length}%` }}
                        key={`${i}${d}`}
                      >
                        {row[val][0]}
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </DataContent>
      </GridDocs>
    </>
  )
}

export default Doc

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug } = params as { slug: string }
  const { content, meta } = getDocFromSlug(slug, locale as "fr" | "en")
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  })
  return { props: { doc: { source: mdxSource, meta }, locale } }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  let paths: any = []
  const slugs = getSlugs("fr")
  slugs.forEach(slug => {
    for (const locale of locales!) {
      paths.push({
        params: {
          slug,
        },
        locale,
      })
    }
  })
  return {
    paths,
    fallback: false,
  }
}
