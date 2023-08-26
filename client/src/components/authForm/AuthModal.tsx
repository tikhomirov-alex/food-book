import React from 'react'
import { IOpenableProps } from '../../component.props'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import styles from './authModal.module.css'

export const AuthModal: React.FC<IOpenableProps> = (props) => {
  return (
    <div
      className={`modal ${styles.authModal}`}
      id='authModal'
      tabIndex={-1}
      aria-labelledby='authModalLabel'
      data-bs-theme='blue'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <ul className='nav nav-fill nav-tabs mb-3' role='tablist'>
              <li className='nav-item' role='presentation'>
                <a
                  className='nav-link active'
                  id='fill-tab-0'
                  data-bs-toggle='tab'
                  href='#fill-tabpanel-0'
                  role='tab'
                  aria-controls='fill-tabpanel-0'
                  aria-selected='true'
                >
                  {' '}
                  Вход{' '}
                </a>
              </li>
              <li className='nav-item' role='presentation'>
                <a
                  className='nav-link'
                  id='fill-tab-1'
                  data-bs-toggle='tab'
                  href='#fill-tabpanel-1'
                  role='tab'
                  aria-controls='fill-tabpanel-1'
                  aria-selected='false'
                >
                  {' '}
                  Регистрация{' '}
                </a>
              </li>
            </ul>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <div className='tab-content' id='tab-content'>
              <div
                className='tab-pane active'
                id='fill-tabpanel-0'
                role='tabpanel'
                aria-labelledby='fill-tab-0'
              >
                <LoginForm />
              </div>
              <div
                className='tab-pane'
                id='fill-tabpanel-1'
                role='tabpanel'
                aria-labelledby='fill-tab-1'
              >
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
