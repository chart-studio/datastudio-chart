import axios from "axios"
import { doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { dbStore } from "../firebaseAuth"
const cancelSubscription = async (subscriptionId: string, userId: string) => {
  const { data } = await axios.post(
    `/api/cancel-subscription?subscriptionId=${subscriptionId}`
  )
  if (data.cancel.cancel_at_period_end) {
    await updateDoc(doc(dbStore, "user", userId), {
      status_subsc: false,
      subscriptionId: "",
      subsc: [],
      timestamp: serverTimestamp(),
    })
  }
  console.log(data, "cancelSubscription")
}

export default cancelSubscription
