export interface IUserProps {
  userId?: string
}

export interface IOpenableProps {
  isOpened: boolean
  hide: () => void
}

export interface IOpenerProps {
  open: () => void
}

export interface IIconInput {
  iconClasses: string
  inputType: 'text' | 'password'
  placeholder: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  id?: string
  name?: string
}
