export interface IAuthProps {
  isUser: boolean
}

export interface IOpenableProps {
  isOpened: boolean,
  hide: () => void
}

export interface IOpener {
  open: () => void
}
