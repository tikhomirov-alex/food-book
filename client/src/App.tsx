import React, { Fragment } from 'react'
import { Header } from './components/header/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { getRoutes } from './routes'

function App() {
  const isUser = false
  const routes = getRoutes(isUser)

  return (
    <Fragment>
      <Header isUser={isUser} />
      <Router>{routes}</Router>
    </Fragment>
  )
}

export default App
