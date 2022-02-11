import { User } from "firebase/auth"
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore"
import { Dispatch, SetStateAction } from "react"
import { UserData } from "../@types/interface"
import { dbStore } from "../firebaseAuth"

const saveSubscription = async (
  idUser: string,
  setUser: Dispatch<SetStateAction<(UserData & User) | null>> | null,
  subscriptionId: string,
  completed: string,
  setUpdateSubsc: Dispatch<
    SetStateAction<"true" | "false" | "loading" | "error" | "errorNoUser">
  >
) => {
  const docRef = doc(dbStore, "user", idUser)
  const docSnap = await getDoc(docRef)
  let userInfos = docSnap.data() as UserData
  if (userInfos.status_subsc) {
    setUpdateSubsc("true")
  } else {
    if (completed === "true") {
      const docRef = doc(dbStore, "user", idUser)
      const docSnap = await getDoc(docRef)
      let userInfos = docSnap.data() as UserData

      if (userInfos && userInfos.subscriptionId === subscriptionId) {
        try {
          await updateDoc(doc(dbStore, "user", idUser), {
            status_subsc: true,
            timestamp: serverTimestamp(),
          })
          setUser!(prev => {
            if (prev) {
              prev.status_subsc = true
            }
            return prev
          })
          setUpdateSubsc("true")
        } catch (error) {
          setUpdateSubsc("error")
        }
      } else {
        setUpdateSubsc("false")
      }
    } else {
      setUpdateSubsc("false")
    }
  }
}

export default saveSubscription
