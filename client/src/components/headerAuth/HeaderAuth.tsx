import React, { Fragment } from 'react'
import { IAuthProps, IOpenerProps } from '../../component.props'
import style from './headerAuth.module.css'

export const HeaderAuth: React.FC<IAuthProps & IOpenerProps> = (props) => {
  if (props.isUser) {
    return <p>User</p>
  }

  return (
    <Fragment>
      <button
        type='button'
        className={`btn btn-light ${style.floated}`}
        onClick={props.open}
      >
        Войти
      </button>
      <a href='/register'>
        <button type='button' className={`btn btn-primary ${style.floated}`}>
          Регистрация
        </button>
      </a>
    </Fragment>
  )
}
