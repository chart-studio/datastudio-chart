import { createCheckoutSession } from "next-stripe/client"
import { loadStripe } from "@stripe/stripe-js"
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
import axios from "axios"
import { routerDir } from "./routerDir"
import { NextRouter, Router } from "next/router"
//https://github.com/ynnoj/next-stripe
export const subscribe = async (
  id: string,
  setUser: Dispatch<SetStateAction<(UserData & User) | null>> | null,
  stripeId: string,
  router: NextRouter
) => {
  try {
    const {
      data: { subscriptionId, clientSecret, error },
    } = await axios.post(`/api/create-subscription?stripeId=${stripeId}`)

    console.log(error, "error")

    if (subscriptionId !== "" && clientSecret !== "") {
      await updateDoc(doc(dbStore, "user", id), {
        status_subsc: false,
        subscriptionId: subscriptionId,
        timestamp: serverTimestamp(),
      })
      setUser!(prev => {
        if (prev) {
          prev.subscriptionId = subscriptionId
        }
        return prev
      })
      //if subscription is not complete, continue to the checkout page
      routerDir(
        router,
        `/checkout?subscriptionId=${subscriptionId}&clientSecret=${clientSecret}`
      )
    }

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

    //create a directory for the user
    /*const graphProdData = await createGraphProdDirectory(id, graphname)
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
    }*/
  } catch (error) {
    console.log(error)
  }
}
