import React from "react"
import { Link, Route, Switch, useRouteMatch } from "react-router-dom"

import User from "./User"

export const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" }
]

const Users = () => {
  const { url, path } = useRouteMatch()

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          {users.map(user => (
            <div key={user.id}>
              <Link to={`${url}/${user.id}`}>{user.name}</Link>
            </div>
          ))}
        </Route>

        <Route path={`${path}/:userId`}>
          <User />
        </Route>
      </Switch>
    </div>
  )
}

export default Users
