import { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  if (method !== "POST") {
    res.status(400).json({ message: "Not allowed" })
  } else {
    try {
      const { subscriptionId } = req.query as { [x: string]: string }

      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2020-08-27",
      })
      //cancel immediatement => stripe.subscriptions.del('sub_49ty4767H20z6a');
      //cancel à la fin de la période
      const cancel = await stripe.subscriptions.update(subscriptionId, {
        cancel_at_period_end: true,
      })

      res.status(200).json({ cancel })
    } catch (error) {
      console.log(error, "api cancel-subscription error")
      return res.status(400).send({
        error: { message: error, file: "api cancel-subscription" },
      })
    }
  }
}
