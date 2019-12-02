import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"

import { users } from "./Users"

const User = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const { userId } = useParams()
  const history = useHistory()

  useEffect(() => {
    const user = users.find(u => u.id === +userId)

    if (user) {
      setCurrentUser(user)
    } else {
      setCurrentUser(null)
      history.push("/not-found")
    }
  }, [userId, history])

  return <>{currentUser && <div>{currentUser.name}'s Dashboard</div>}</>
}

export default User
