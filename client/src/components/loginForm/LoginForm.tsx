import React from 'react'
import styles from './loginForm.module.css'
import { IOpenableProps } from '../../component.props'
import { IconInput } from '../iconInput/IconInput'

export const LoginForm: React.FC<IOpenableProps> = (props) => {

  if (!props.isOpened) {
    return null
  }

  return (
    <div className={styles.login_form}>
      <form className='text-white'>
        <div className={styles.close_wrapper} onClick={props.hide}>
          <div className={styles.close}></div>
        </div>
        <div className='mb-1'>
          <label htmlFor='login-email'>Email</label>
          <IconInput
            iconClasses='fa-solid fa-envelope'
            inputType='text'
            placeholder='name@example.com'
            id='login-email'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='login-password'>Password</label>
          <IconInput
            iconClasses='fa-solid fa-lock'
            inputType='password'
            placeholder='input password'
            id='login-password'
          />
        </div>
        <div className='text-center'>
          <input className='btn btn-light' type='submit' value='Войти' />
        </div>
      </form>
    </div>
  )
}
