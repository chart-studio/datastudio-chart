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
import Script from "next/script"
const GridDocs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 70rem) {
  }
  .hljs {
    background: var(--surface4);
    color: var(--text2);
    border-radius: 0.5rem;
  }
`
const GraphContent = styled.div`
  height: calc(100vh - 4rem);
  @media (max-width: 48rem) {
    height: auto;
  }
  @media (max-width: 70rem) {
  }
  width: 100%;
  padding: 1rem;
  position: sticky;
  top: 4rem;
  display: flex;
  justify-content: center;
`
const DocContent = styled.div`
  margin: 1rem;
`
const test = ({ doc, locale }: { doc: MDXDoc; locale: locale }) => {
  const router = useRouter()

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
          <GraphsComponent val={doc.meta.chartInfo.chartComponent} />
        </GraphContent>

        <DocContent>
          <h1>{doc.meta.title}</h1>
          <MDXRemote {...doc.source} />
        </DocContent>
      </GridDocs>
    </>
  )
}

export default test

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
