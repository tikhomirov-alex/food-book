import React, { Fragment, useContext } from 'react'
import { IHeaderProps } from '../../component.props'
import { AuthContext } from '../../context/AuthContext'
import style from './headerAuth.module.css'

export const HeaderAuth: React.FC<IHeaderProps> = (props) => {
  const auth = useContext(AuthContext)

  const logoutHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    auth.logout()
  }

  if (props.userId) {
    return (
      <div className='floated'>
        <img
          className={style.avatar}
          src='https://placehold.co/50x50.png'
          alt='avatar'
        />
        <div className={`btn-group ${style.clicker}`} data-bs-theme='dark'>
          <div
            className='dropdown-toggle'
            data-bs-toggle='dropdown'
            data-bs-auto-close='outside'
            aria-expanded='false'
          >
            {auth.username}
          </div>
          <ul className='dropdown-menu'>
            <li>
              <a className='dropdown-item' href='#'>
                Профиль
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Мои рецепты
              </a>
            </li>
            {auth.username === 'admin' ? (
              <li>
                <a className='dropdown-item' href='/dashboard'>
                  Панель управления
                </a>
              </li>
            ) : null}
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
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#authModal'
      >
        Войти
      </button>
    </Fragment>
  )
}
