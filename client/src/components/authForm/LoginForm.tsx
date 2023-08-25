import React, { useContext, useState } from 'react'
import styles from './loginForm.module.css'
import { IOpenableProps } from '../../component.props'
import { IconInput } from '../iconInput/IconInput'
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/AuthContext'
import { UserData } from '../../types'

export const LoginForm: React.FC = () => {
  const auth = useContext(AuthContext)
  const { loading, request, error, clearError } = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const loginHandler = async () => {
    try {
      const data: UserData = await request('/api/auth/login', 'post', {
        ...form,
      })
      if (data.token && data.userId) {
        auth.login(data.token, data.userId)
      }
    } catch (err: any) {}
  }

  return (
    <form className='text-white'>
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
  )
}
