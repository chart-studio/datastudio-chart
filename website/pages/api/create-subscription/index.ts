import { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  if (method !== "POST") {
    res.status(400).json({ message: "Not allowed" })
  } else {
    try {
      const { stripeId } = req.query as { [x: string]: string }
      const priceId = "price_1KMEB3Ii2iSop16uMc9qN2uV"
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2020-08-27",
      })
      const subscription = await stripe.subscriptions.create({
        customer: stripeId,
        items: [{ price: priceId }],
        payment_behavior: "default_incomplete",
        expand: ["latest_invoice.payment_intent"],
      })
      const {
        latest_invoice: { payment_intent },
      } = subscription as {
        latest_invoice: { payment_intent: Stripe.PaymentIntent }
      }
      //const { id } = req.query as { [x: string]: string }
      //const BASE_URL = req.headers.origin ||"http://localhost:3000"

      res.status(200).json({
        subscriptionId: subscription.id,
        clientSecret: payment_intent ? payment_intent.client_secret : "",
      })
    } catch (error) {
      return res.status(400).send({
        error: { message: error, file: "api create-subscription" },
        subscriptionId: "",
        clientSecret: "",
      })
    }
  }
}
