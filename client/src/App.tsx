import React, { Fragment, useState } from 'react'
import { Header } from './components/header/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { getRoutes } from './routes'
import { LoginForm } from './components/loginForm/LoginForm'

function App() {
  const isUser = false
  const routes = getRoutes(isUser)

  const [displayLoginForm, setDisplayLoginForm] = useState<boolean>(false)
  const showLoginForm = () => {
    setDisplayLoginForm(true)
  }
  const hideLoginForm = () => {
    setDisplayLoginForm(false)
  }

  return (
    <Fragment>
      <Header isUser={isUser} open={showLoginForm} />
      <Router>{routes}</Router>

      <LoginForm isOpened={displayLoginForm} hide={hideLoginForm} />
    </Fragment>
  )
}

export default App
