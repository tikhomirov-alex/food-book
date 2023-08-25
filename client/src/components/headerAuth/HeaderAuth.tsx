import React, { Fragment, useContext, useState } from 'react'
import { IUserProps, IOpenerProps } from '../../component.props'
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/AuthContext'
import style from './headerAuth.module.css'

export const HeaderAuth: React.FC<IUserProps & IOpenerProps> = (props) => {
  const auth = useContext(AuthContext)

  const { request } = useHttp()
  const [user, setUser] = useState({
    name: ''
  })

  const logoutHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    auth.logout()
  }

  if (props.userId) {
    return (
      <div className='floated'>
        <img className={style.avatar} src='https://placehold.co/50x50.png' alt='avatar' />
        <div className={`btn-group ${style.clicker}`} data-bs-theme='dark'>
          <div
            className='dropdown-toggle'
            data-bs-toggle='dropdown'
            data-bs-auto-close='outside'
            aria-expanded='false'
          >
            Username
          </div>
          <ul className='dropdown-menu'>
            <li>
              <a className='dropdown-item' href='#'>
                Профиль
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Настройки
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='/' onClick={logoutHandler}>
                Выйти
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
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
