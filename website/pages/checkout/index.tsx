import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { NextPage, NextPageContext } from "next"
import styled from "styled-components"
import { getInfosPayment } from "../../helpers/getOnfosPayment"
//const Editor = dynamic(() => import("@stripe/stripe-js/pure"), { ssr: false })
//http://localhost:3000/checkout?subscriptionId=sub_1KQsHVIi2iSop16u4xoXrF5j&clientSecret=pi_3KQsHVIi2iSop16u0fVx10IY_secret_oQVHnWjQbqPqHx9Ma8XCyUrE5
//4242 4242 4242 4242
//08 / 22

const ButtonSub = styled.button`
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  background-color: var(--success);
  border-radius: 0.5rem;
  border: solid 1px var(--success);
  height: 2.2rem;
  align-items: center;
  justify-content: center;
  :hover {
    opacity: 0.8;
  }
  :disabled {
    opacity: 0.5;
  }
`
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

type CheckOutInput = {
  subscriptionId: string
  clientSecret: string
}

const index: NextPage<CheckOutInput> = ({ subscriptionId, clientSecret }) => {
  if (subscriptionId && clientSecret) {
    console.log(subscriptionId, clientSecret, "subscriptionId")
  }
  if (!subscriptionId || !clientSecret) {
    return null
  }
  const options = {
    clientSecret,
  }
  const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    return (
      <>
        {!elements || !stripe || !PaymentElement ? (
          "loading"
        ) : (
          <form>
            <PaymentElement />
            <ButtonSub
              onClick={getInfosPayment(stripe, elements, subscriptionId)}
            >
              Submit
            </ButtonSub>
          </form>
        )}
      </>
    )
  }
  return (
    <div className="container-checkout">
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}

export default index

interface Context extends NextPageContext {
  query: CheckOutInput
}

index.getInitialProps = async ({ query }: Context) => {
  const { subscriptionId, clientSecret } = query
  return { subscriptionId, clientSecret }
}
