import { useState, useCallback, useEffect } from 'react'
import { UserData } from '../types'

const storageName = 'userData'  

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)

  const login = useCallback((jwtToken: string, id: string) => {
    setToken(jwtToken)
    setUserId(id)

    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken
    }))
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const userData = localStorage.getItem(storageName)
    if (!userData) {
      return
    } 

    const data: UserData = JSON.parse(userData)
    if (data && data.token && data.userId) {
      login(data.token, data.userId)
    }
  }, [login])

  return { login, logout, token, userId }
}
