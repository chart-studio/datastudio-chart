import { getAuth, onIdTokenChanged, User } from "firebase/auth"
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react"
import { dbStore, firebaseApp } from "../firebaseAuth"
import nookies from "nookies"
import { doc, DocumentData, getDoc } from "firebase/firestore"
import { UserData } from "../@types/interface"

//https://colinhacks.com/essays/nextjs-firebase-authentication
//POur un refrresh si on n'utilise pas firestore ou realtime database

const auth = getAuth(firebaseApp)
export const AuthContext = createContext<{
  user: (UserData & User) | null
  setUser: Dispatch<SetStateAction<(UserData & User) | null>> | null
}>({
  user: null,
  setUser: null,
})

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<(UserData & User) | null>(null)
  useEffect(() => {
    return onIdTokenChanged(auth, async user => {
      if (!user) {
        setUser(null)
        nookies.set(undefined, "token", "", { path: "/" })
      } else {
        const token = await user.getIdToken()
        const docRef = doc(dbStore, "user", user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          let userInfos = docSnap.data()
          userInfos.uid = user.uid
          setUser(userInfos as any)
        } else {
          console.log("No such document!")
        }
        nookies.set(undefined, "token", token, { path: "/" })
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
