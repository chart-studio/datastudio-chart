import { User } from "firebase/auth"
import { arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { Dispatch, SetStateAction } from "react"
import { UserData } from "../@types/interface"
import { dbStore } from "../firebaseAuth"
import { createGraphTestDirectory } from "./createGraphTestDirectory"
import { date_YYYY_MM_DD } from "./date_YYYY_MM_DD"

export const tryGraph = async (
  id: string,
  graphname: string,
  setUser: Dispatch<SetStateAction<(UserData & User) | null>> | null
) => {
  const date = new Date()
  const createdDate = date_YYYY_MM_DD(date)
  try {
    const graphTestData = await createGraphTestDirectory(id, graphname)
    console.log(graphTestData, id)
    const dataToSave = {
      graphname,
      createdDate,
      link: `gs://vizdata_test/${graphTestData.destBucketName}`,
    }
    await updateDoc(doc(dbStore, "user", id), {
      trygraph: arrayUnion(dataToSave),
      timestamp: serverTimestamp(),
    })
    setUser!(prev => {
      if (prev) {
        prev.trygraph.push(dataToSave)
      }
      console.log(prev, "tototo")
      return prev
    })
    console.log(id, dataToSave, "tootiih,n")
  } catch (error) {
    console.log(error)
  }
}
