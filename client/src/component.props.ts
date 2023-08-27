export interface IHeaderProps {
  userId?: string
  username?: string
  openModal?: () => void
}

export interface IModalManagementProps {
  hide: () => void
  isOpened: boolean
}

export interface IIconInput {
  iconClasses: string
  inputType: 'text' | 'password'
  placeholder: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  id?: string
  name?: string
  required?: boolean
}
