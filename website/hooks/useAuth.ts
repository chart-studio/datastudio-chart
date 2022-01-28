import { useContext } from "react"
import { AuthContext } from "../Context/Auth"

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuthContext must be within AuthContext")
  }
  return context
}
