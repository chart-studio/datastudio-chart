import { UserData } from "../@types/interface"
import { User } from "firebase/auth"
import { Dispatch, SetStateAction } from "react"
import { date_YYYY_MM_DD } from "./date_YYYY_MM_DD"
import {
  arrayUnion,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore"
import { dbStore } from "../firebaseAuth"
import { createGraphProdDirectory } from "./createGraphProdDirectory"
//https://github.com/ynnoj/next-stripe
export const subscribeAdd = async (
  id: string,
  graphname: string,
  setUser: Dispatch<SetStateAction<(UserData & User) | null>> | null
) => {
  try {
    //create a directory for the user
    const graphProdData = await createGraphProdDirectory(id, graphname)
    console.log(graphProdData, "graphProdData")

    const docRef = doc(dbStore, "user", id)
    const docSnap = await getDoc(docRef)
    let userInfos = docSnap.data()
    if (
      (
        userInfos?.trygraph as Array<{
          createdDate: string
          graphname: string
          link: string
        }>
      ).length > 0
    ) {
      ;(
        userInfos?.trygraph as Array<{
          createdDate: string
          graphname: string
          link: string
        }>
      ).map(async (graphInfo, i) => {
        const link = `gs://vizdata_prod/visualisations/prod/subsc/${id}/${graphInfo.graphname}`
        const dataToSave = {
          graphname: graphInfo.graphname,
          createdDate: graphInfo.createdDate,
          link,
        }
        await updateDoc(doc(dbStore, "user", id), {
          status_subsc: true,
          subsc: arrayUnion(dataToSave),
          timestamp: serverTimestamp(),
        })
        setUser!(prev => {
          if (prev) {
            prev.status_subsc = true
            prev.subsc.push(dataToSave)
          }
          return prev
        })
      })
    }
    if (
      !(
        userInfos?.trygraph as Array<{
          createdDate: string
          graphname: string
          link: string
        }>
      ).find(graph => graph.graphname === graphname)
    ) {
      const date = new Date()
      const createdDate = date_YYYY_MM_DD(date)
      const link = `gs://vizdata_prod/visualisations/prod/subsc/${id}/${graphname}`
      const dataToSave = {
        graphname,
        createdDate,
        link,
      }
      await updateDoc(doc(dbStore, "user", id), {
        status_subsc: true,
        subsc: arrayUnion(dataToSave),
        timestamp: serverTimestamp(),
      })
      setUser!(prev => {
        if (prev) {
          prev.status_subsc = true
          prev.subsc.push(dataToSave)
        }
        return prev
      })
    }
  } catch (error) {
    console.log(error)
  }
}
