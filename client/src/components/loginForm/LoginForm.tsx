import React, { useRef, useEffect } from 'react'
import styles from './loginForm.module.css'
import { IOpenableProps } from '../../component.props'

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
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='login-email'
            placeholder='name@example.com'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='inputPassword5' className='form-label'>
            Password
          </label>
          <input
            type='password'
            id='inputPassword5'
            className='form-control'
            placeholder='Введите пароль'
            autoComplete='on'
          />
        </div>
        <div className='text-center'>
          <input className='btn btn-primary' type='submit' value='Войти' />
        </div>
      </form>
    </div>
  )
}
