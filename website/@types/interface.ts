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
  stripeId: string
  status_subsc: boolean
  subscriptionId: string
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
  stripePrice: string
  cloudName: string
  setOpenModal: Dispatch<SetStateAction<boolean>>
  connected: boolean
  setSelectedModal: Dispatch<SetStateAction<string>>
  setSelectedGraph: Dispatch<SetStateAction<string>>
  setSelectedDoc: Dispatch<SetStateAction<string>>
  setSelectedGrapPrice: Dispatch<SetStateAction<string>>
}
