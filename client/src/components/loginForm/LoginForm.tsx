import React, { useContext, useState } from 'react'
import styles from './loginForm.module.css'
import { IOpenableProps } from '../../component.props'
import { IconInput } from '../iconInput/IconInput'
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/AuthContext'
import { LoginData } from '../../types'

export const LoginForm: React.FC<IOpenableProps> = (props) => {
  const auth = useContext(AuthContext)
  const { loading, request, error, clearError } = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  if (!props.isOpened) {
    return null
  }

  const loginHandler = async () => {
    try {
      const data: LoginData = await request('/api/auth/login', 'post', { ...form })
      if (data.token && data.userId) {
        auth.login(data.token, data.userId)
        props.hide()
      }
    } catch (err: any) {}
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
            name='email'
            id='login-email'
            onChange={changeHandler}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='login-password'>Password</label>
          <IconInput
            iconClasses='fa-solid fa-lock'
            inputType='password'
            placeholder='input password'
            name='password'
            id='login-password'
            onChange={changeHandler}
          />
        </div>
        <div className='text-center'>
          <input
            className='btn btn-light'
            type='submit'
            value='Войти'
            onClick={loginHandler}
            disabled={loading}
          />
        </div>
      </form>
    </div>
  )
}
