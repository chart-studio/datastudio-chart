import { useElements, useStripe } from "@stripe/react-stripe-js"
import { MouseEvent } from "react"
export const getInfosPayment = (
  stripe: ReturnType<typeof useStripe>,
  elements: ReturnType<typeof useElements>,
  subscriptionId: string
) => {
  if (!stripe || !elements) {
    return () => {}
  }
  return async function processPayment(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const button = e.currentTarget
    button.disabled = true
    button.innerHTML = "Processing..."

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_SITENAME}/success?subscriptionId=${subscriptionId}&complete=true`,
      },
    })

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message)
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }

    console.log(button)
  }
}
