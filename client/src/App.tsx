import React, { Fragment, useState } from 'react'
import { Header } from './components/header/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { getRoutes } from './routes'
import { LoginForm } from './components/loginForm/LoginForm'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'

function App() {
  const { token, login, logout, userId } = useAuth()
  const isAuthenticated = !!token
  const routes = getRoutes(isAuthenticated)

  const [displayLoginForm, setDisplayLoginForm] = useState<boolean>(false)
  const showLoginForm = () => {
    setDisplayLoginForm(true)
  }
  const hideLoginForm = () => {
    setDisplayLoginForm(false)
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {userId ?
      <Header userId={userId} open={showLoginForm} /> :
      <Header open={showLoginForm} /> }

      <Router>{routes}</Router>

      <LoginForm isOpened={displayLoginForm} hide={hideLoginForm} />
    </AuthContext.Provider>
  )
}

export default App
