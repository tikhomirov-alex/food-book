import React, { createContext } from 'react'
import { AuthData } from '../types'

export const AuthContext: React.Context<AuthData> = createContext<AuthData>({
  token: null,
  userId: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
})
