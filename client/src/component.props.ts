import { ReactNode } from "react"

export interface IHeaderProps {
  userId?: string
  username?: string
  openModal?: () => void
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

export interface IModalProps {
  show?: boolean
  children: ReactNode
  hasCloseButton: boolean
  close?: () => void
}

export interface ICustomSize {
  width: string
  height: string
}
