export interface IAuthProps {
  isUser: boolean
}

export interface IOpenableProps {
  isOpened: boolean,
  hide: () => void
}

export interface IOpenerProps {
  open: () => void
}

export interface IIconInput {
  iconClasses: string,
  inputType: 'text' | 'password',
  placeholder: string,
  id?: string
}
