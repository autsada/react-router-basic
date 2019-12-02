import React from "react"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"

import Users from "./components/Users"
import Courses from "./components/Courses"

const Home = () => <div>Home Page</div>
const About = () => <div>About Page</div>
const NotFound = () => <div>NotFound Page</div>

function App() {
  return (
    <BrowserRouter>
      <nav style={{ width: "60%", margin: "50px auto" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: "10px" }}>
          About
        </Link>
        <Link to="/courses" style={{ marginRight: "10px" }}>
          Courses
        </Link>
        <Link to="/users" style={{ marginRight: "10px" }}>
          Users
        </Link>
      </nav>
      <div style={{ width: "60%", margin: "50px auto" }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
