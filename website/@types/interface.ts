import { MDXRemoteSerializeResult } from "next-mdx-remote"
import fr from "../locales/fr"

export interface InterDocs {
  content: string
  meta: InterDocMeta
}

export interface InterDocMeta {
  slug: string
  tags: string
  publishedAt: string
  title: string
  chartInfo: typeof fr.charts[0]
}

export type locale = "fr" | "en"

export interface MDXDoc {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  meta: InterDocMeta
}
