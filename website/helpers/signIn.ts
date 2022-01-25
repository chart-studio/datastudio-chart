import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth"
import { firebaseApp, dbStore, collection, addDoc } from "../firebaseAuth"
const auth = getAuth(firebaseApp)
export const signIn = (locale: string = "en") => {
  auth.languageCode = locale
  const provider = new GoogleAuthProvider()
  //ne fonctionne pas car ferme la page de next
  // signInWithRedirect(auth, provider)
  // getRedirectResult(auth)
  //   .then(result => {
  //     const credential = GoogleAuthProvider.credentialFromResult(result!)
  //     const token = credential!.accessToken
  //     const userCredentials = result!.user
  //     console.log(userCredentials, typeof userCredentials)
  //   })
  //   .catch(error => {
  //     // Handle Errors here.
  //     const errorCode = error.code
  //     const errorMessage = error.message
  //     // The email of the user's account used.
  //     const email = error.email
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error)
  //     // ...
  //   })

  signInWithPopup(auth, provider)
    .then(async result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential!.accessToken
      // The signed-in user info.
      const userCredentials = result.user

      // console.log(userCredentials, typeof userCredentials)

      const docUser = await addDoc(collection(dbStore, "user"), {
        uid: userCredentials.uid,
        email: userCredentials.email,
        name: userCredentials.displayName,
        provider: userCredentials.providerData[0].providerId,
        photoUrl: userCredentials.photoURL,
        phoneNumber: userCredentials.phoneNumber,
      })

      console.log("Document written with ID: ", docUser.id)
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.email
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      // ...
      console.log(errorCode, errorMessage, email, credential, auth)
    })
}
