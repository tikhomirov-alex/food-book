import { useState, useCallback } from 'react'
import { Method } from '../types'

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const request = useCallback(
    async (url: string, method: Method = 'get', body: any = null, isJson: boolean = true, headers: any = {}) => {
      setLoading(true)
      try {

        if (body && isJson) {
          body = JSON.stringify(body)
          headers['Content-Type'] = 'application/json'
        }

        const response = await fetch(url, {
          method,
          body,
          headers
        })
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.msg || 'Что-то пошло не так')
        }

        setLoading(false)

        return data

      } catch (err: any) {
        setLoading(false)
        setError(err.message)
        throw err
      }
    },
    []
  )

  const clearError = useCallback(() => setError(''), [])

  return { loading, request, error, clearError }
}
