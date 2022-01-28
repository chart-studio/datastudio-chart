import React, { useEffect } from "react"
import { Router, useRouter, withRouter } from "next/router"
import { useAuth } from "../../hooks/useAuth"

const index = () => {
  const { user } = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (!user) {
      router.push(`/`, undefined, {
        shallow: true,
      })
    }
  }, [router])

  return <div>{JSON.stringify(user?.uid)}</div>
}

export default index
