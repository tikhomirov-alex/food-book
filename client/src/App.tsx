import React, { Fragment, useState } from 'react'
import { Header } from './components/header/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { getRoutes } from './routes'
import { LoginForm } from './components/loginForm/LoginForm'

function App() {
  const isUser = false
  const routes = getRoutes(isUser)
  const [displayLoginForm, setLoginDisplayForm] = useState(false)

  const showLoginForm = () => {
    setLoginDisplayForm(true)
  }
  const hideLoginForm = () => {
    setLoginDisplayForm(false)
  }

  return (
    <Fragment>
      <Header isUser={isUser} setDisplay={showLoginForm} />
      <Router>{routes}</Router>

      {displayLoginForm ? <LoginForm setDisplay={hideLoginForm} /> : null}
    </Fragment>
  )
}

export default App
