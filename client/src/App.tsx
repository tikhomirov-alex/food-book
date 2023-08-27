import React, { Fragment, useState } from 'react'
import { Header } from './components/header/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { getRoutes } from './routes'
import { LoginForm } from './components/authForm/LoginForm'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { AuthModal } from './components/authForm/AuthModal'

function App() {
  const { token, login, logout, userId, username } = useAuth()
  const isAuthenticated = !!token
  const isAdmin = username === 'admin'
  const routes = getRoutes(isAuthenticated, isAdmin)

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        login,
        logout,
        isAuthenticated,
        username
      }}
    >
      {userId && username ? <Header userId={userId} username={username} /> : <Header />}

      <Router>{routes}</Router>
      <AuthModal />
    </AuthContext.Provider>
  )
}

export default App
