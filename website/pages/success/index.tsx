import { NextPage, NextPageContext } from "next"
import { useEffect, useState } from "react"
import saveSubscription from "../../helpers/saveSubscription"
import { useAuth } from "../../hooks/useAuth"

type SuccessInput = {
  complete: string
  subscriptionId: string
}

const index: NextPage<SuccessInput> = ({ complete, subscriptionId }) => {
  const { user, setUser } = useAuth()
  console.log(user, "eeee")
  const [updateSubsc, setUpdateSubsc] = useState<
    "true" | "false" | "loading" | "error" | "errorNoUser"
  >("loading")
  useEffect(() => {
    console.log(user, "user in succees page")
    if (user) {
      console.log("in success page")
      saveSubscription(
        user.uid,
        setUser,
        subscriptionId,
        complete,
        setUpdateSubsc
      )
    }
  }, [user])
  return <div>success: {updateSubsc}</div>
}

export default index

interface Context extends NextPageContext {
  query: SuccessInput
}

index.getInitialProps = async ({ query }: Context) => {
  const { complete, subscriptionId } = query
  return { complete, subscriptionId }
}
