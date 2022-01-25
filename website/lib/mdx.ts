import fs from "fs"
import matter from "gray-matter"
import path from "path"
import readingTime from "reading-time"
import { sync } from "glob"
import { InterDocs } from "../@types/interface"
import fr from "../locales/fr"
import en from "../locales/en"

const postDir = path.join(process.cwd(), "/Data/Docs")
export const getAllDocs = (locale: "fr" | "en" = "fr") => {
  const posts = getSlugs(locale)
    .map(slug => getDocFromSlug(slug, locale))
    .sort((a, b) => {
      if (a.meta.publishedAt > b.meta.publishedAt) return -1
      if (a.meta.publishedAt < b.meta.publishedAt) return 1
      return 0
    })
  return posts
}

export const getSlugs = (locale: "fr" | "en" = "fr") => {
  const paths = sync(`${postDir}/*.${locale}.mdx`)
  return paths.map(path => {
    const parts = path.split("/")
    const fileName = parts[parts.length - 1]
    const [slug, locale, _ext] = fileName.split(".")
    return slug
  })
}

export const getDocFromSlug = (
  slug: string,
  locale: "fr" | "en" = "fr"
): InterDocs => {
  const postPath = path.join(postDir, `${slug}.${locale}.mdx`)
  const source = fs.readFileSync(postPath)
  const { content, data } = matter(source)
  const t = locale === "en" ? en : fr
  return {
    content,
    meta: {
      slug,
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      publishedAt: (data.publishedAt ?? new Date()).toString(),
      chartInfo: t.charts.find(chart => chart.id === data.graphId)!,
    },
  }
}
