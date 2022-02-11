import { NextApiRequest, NextApiResponse } from "next"
import type { NextRequest } from "next/server"
import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
})

export default async (
  req: NextApiRequest & NextRequest,
  res: NextApiResponse
) => {
  const { method } = req
  const { email } = req.query as { [x: string]: string }
  if (method !== "POST") {
    res.status(405).json({ message: "Not allowed" })
  } else {
    try {
      const customer = await stripe.customers.create({
        email,
      })
      res.status(200).json({ stripeId: customer.id })
    } catch (error) {
      console.error(error)
      return res.status(500).end(error)
    }
  }
}
