import React from 'react'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'

export const AuthModal: React.FC = () => {
  return (
    <div
      className='modal'
      id='authModal'
      tabIndex={-1}
      aria-labelledby='authModalLabel'
      aria-hidden='true'
      data-bs-theme='darkblue'
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header '>
            <div className='col-11'>
              <ul className='nav nav-tabs nav-fill mb-1' role='tablist'>
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
            </div>
            <div className='col-1 align-self-start'>
              <button
                type='button'
                className='btn-close btn-close-white'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
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
