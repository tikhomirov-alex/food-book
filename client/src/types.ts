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

export type UserData = {
  token: string | null
  userId: string | null
  msg: string | null
}

export type AuthData = {
  token: string | null
  userId: string | null
  login: (() => void) | ((token: string, id: string) => void)
  logout: () => void
  isAuthenticated: boolean
}
