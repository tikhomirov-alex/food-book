import { useState, useCallback, useEffect } from 'react'
import { UserData } from '../types'

const storageName = 'userData'  

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)

  const login = useCallback((jwtToken: string, id: string, name: string) => {
    setToken(jwtToken)
    setUserId(id)
    setUsername(name)

    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken, username: name
    }))
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setUsername(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const userData = localStorage.getItem(storageName)
    if (!userData) {
      return
    } 

    const data: UserData = JSON.parse(userData)
    if (data && data.token && data.userId && data.username) {
      login(data.token, data.userId, data.username)
    }
  }, [login])

  return { login, logout, token, userId, username }
}
