export type Method =
  | 'get'
  | 'head'
  | 'post'
  | 'put'
  | 'delete'
  | 'connect'
  | 'options'
  | 'trace'
  | 'patch'

export type LoginData = {
  token: string | null,
  userId: string | null
}

export type AuthData = {
  token: string | null
  userId: string | null
  login: (() => void) | ((token: string, id: string) => void)
  logout: () => void
  isAuthenticated: boolean
}
