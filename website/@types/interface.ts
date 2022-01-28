import { FieldValue } from "firebase/firestore"
import { MDXRemoteSerializeResult } from "next-mdx-remote"
import { Dispatch, SetStateAction } from "react"
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

export interface InterButtonAccount {
  url?: string
}

export interface UserData {
  email: string
  name: string
  provider: string
  photoUrl: string
  phoneNumber: string
  token: string
  timestamp: FieldValue
  subsc: {
    graphname: string
    createdDate: string
    link: string
  }[]
  trygraph: {
    graphname: string
    createdDate: string
    link: string
  }[]
}

//////type

export type Card = {
  link: string
  link_image: string
  title: string
  desc: string
  addDate: string
  tool: string
  t: typeof fr
  stripePrice: string
  cloudName: string
  id: string
  setOpenModal: Dispatch<SetStateAction<boolean>>
  connected: boolean
  setSelectedModal: Dispatch<SetStateAction<string>>
  setSelectedGraph: Dispatch<SetStateAction<string>>
  setSelectedDoc: Dispatch<SetStateAction<string>>
  user: UserData | null
  setSelectedGrapPrice: Dispatch<SetStateAction<string>>
}
