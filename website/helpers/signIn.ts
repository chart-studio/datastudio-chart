import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth"
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore"
import { firebaseApp, dbStore } from "../firebaseAuth"
const auth = getAuth(firebaseApp)
export const signIn = (locale: string = "en", setUser: any) => {
  auth.languageCode = locale
  const provider = new GoogleAuthProvider()
  setPersistence(auth, browserSessionPersistence)
    .then(async () => {
      return signInWithPopup(auth, provider)
        .then(async result => {
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential!.accessToken
          const userCredentials = result.user
          const docRef = doc(dbStore, "user", userCredentials.uid)
          const docSnap = await getDoc(docRef)

          if (!docSnap.exists()) {
            await setDoc(doc(dbStore, "user", userCredentials.uid), {
              email: userCredentials.email!,
              name: userCredentials.displayName!,
              provider: userCredentials.providerData[0].providerId!,
              photoUrl: userCredentials.photoURL!,
              phoneNumber: userCredentials.phoneNumber!,
              token: token!,
              trygraph: [],
              subsc: [],
              timestamp: serverTimestamp(),
            })
            setUser({
              uid: userCredentials.uid,
              email: userCredentials.email!,
              name: userCredentials.displayName!,
              provider: userCredentials.providerData[0].providerId!,
              photoUrl: userCredentials.photoURL!,
              phoneNumber: userCredentials.phoneNumber!,
              token: token!,
              trygraph: [],
              subsc: [],
            })
          } else {
            let userInfos = docSnap.data()
            console.log(userInfos, "userInfos")
            setUser({
              uid: userCredentials.uid,
              email: userInfos.email!,
              name: userInfos.displayName!,
              provider: userInfos.providerData[0].providerId!,
              photoUrl: userInfos.photoURL!,
              phoneNumber: userInfos.phoneNumber!,
              trygraph: userInfos.trygraph,
              subsc: userInfos.subsc,
            })
          }

          console.log("Document written with ID: ", userCredentials.uid)
        })
        .catch(error => {
          const errorCode = error.code
          const errorMessage = error.message
          const email = error.email
          const credential = GoogleAuthProvider.credentialFromError(error)
          console.log(errorCode, errorMessage, email, credential, auth)
        })
    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}
