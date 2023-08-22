import React, { Fragment } from "react"
import { IAuthProps } from "../../component.props"
import style from './headerAuth.module.css'

export const HeaderAuth: React.FC<IAuthProps> = (authData) => {
  if (authData.isUser) {
    return (
      <p>User</p>
    )
  }
  
  return (
    <Fragment>
      <button type='button' className={`btn btn-light ${style.floated}`}>
        Войти
      </button>
      <button type='button' className={`btn btn-primary ${style.floated}`}>
        Регистрация
      </button>
    </Fragment>
  )
}
