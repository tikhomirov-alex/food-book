import React, { useContext, useState } from 'react'
import styles from './loginForm.module.css'
import { IconInput } from '../iconInput/IconInput'
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/AuthContext'
import { UserData } from '../../types'

export const RegisterForm: React.FC = () => {
  const auth = useContext(AuthContext)
  const { loading, request, error, clearError } = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: '',
    firstname: '',
    lastname: '',
  })

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data: UserData = await request('/api/auth/register', 'post', {
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
        <label htmlFor='reg-email'>Email</label>
        <IconInput
          iconClasses='fa-solid fa-envelope'
          inputType='text'
          placeholder='name@example.com'
          name='email'
          id='reg-email'
          onChange={changeHandler}
        />
      </div>
      <div className='mb-1'>
        <label htmlFor='reg-username'>Username</label>
        <IconInput
          iconClasses='fa-solid fa-at'
          inputType='text'
          placeholder='username'
          id='reg-username'
          onChange={changeHandler}
        />
      </div>
      <div className='mb-1'>
        <label htmlFor='reg-name'>Name</label>
        <IconInput
          iconClasses='fa-solid fa-user'
          inputType='text'
          placeholder='your first name'
          id='reg-name'
          onChange={changeHandler}
        />
      </div>
      <div className='mb-1'>
        <label htmlFor='reg-surname'>Surname</label>
        <IconInput
          iconClasses='fa-solid fa-user'
          inputType='text'
          placeholder='your last name'
          id='reg-surname'
          onChange={changeHandler}
        />
      </div>
      <div className='mb-1'>
        <label htmlFor='reg-password'>Password</label>
        <IconInput
          iconClasses='fa-solid fa-lock'
          inputType='password'
          placeholder='input password'
          id='reg-password'
          onChange={changeHandler}
        />
      </div>
      <div className='mb-1'>
        <label htmlFor='reg-repeat'>Repeat password</label>
        <IconInput
          iconClasses='fa-solid fa-lock'
          inputType='password'
          placeholder='repeat password'
          id='reg-repeat'
          onChange={changeHandler}
        />
      </div>
      <div className='text-center'>
        <input
          className='btn btn-primary'
          type='submit'
          onClick={registerHandler}
          value='Зарегистрироваться'
        />
      </div>
    </form>
  )
}
