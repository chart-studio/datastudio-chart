import { createCheckoutSession } from "next-stripe/client"
import { loadStripe } from "@stripe/stripe-js"
import { UserData } from "../@types/interface"
import { User } from "firebase/auth"
import { Dispatch, SetStateAction } from "react"
import { date_YYYY_MM_DD } from "./date_YYYY_MM_DD"
import { arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { dbStore } from "../firebaseAuth"
//https://github.com/ynnoj/next-stripe
export const subscribe = async (
  id: string,
  stripePrice: string,
  graphname: string,
  setUser: Dispatch<SetStateAction<(UserData & User) | null>> | null
) => {
  try {
    // const session = await createCheckoutSession({
    //   success_url: window.location.href, //page Merci??
    //   cancel_url: window.location.href,
    //   line_items: [{ price: stripePrice, quantity: 1 }],
    //   payment_method_types: ["card"],
    //   mode: "subscription",
    // })
    // const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
    // if (stripe) {
    //   stripe.redirectToCheckout({ sessionId: session.id })
    // }
    const date = new Date()
    const createdDate = date_YYYY_MM_DD(date)
    const link = `gs://visualisations/prod/subsc/${id}/${graphname}`

    const dataToSave = {
      graphname,
      createdDate,
      link,
    }
    await updateDoc(doc(dbStore, "user", id), {
      subsc: arrayUnion(dataToSave),
      timestamp: serverTimestamp(),
    })
    setUser!(prev => {
      if (prev) {
        prev.subsc.push(dataToSave)
      }
      return prev
    })
  } catch (error) {
    console.log(error)
  }
}
