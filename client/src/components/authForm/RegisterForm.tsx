import React, { useContext, useState } from 'react'
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
    if (event.target.name === 'repeat') {
      return
    }
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data: UserData = await request('/api/auth/register', 'post', {
        ...form,
      })
      if (data && data.token && data.userId && data.username) {
        auth.login(data.token, data.userId, data.username)
      }
    } catch (err: any) {}
  }

  return (
    <form className='text-white'>
      <div className='mb-1'>
        <label htmlFor='reg-email' className='required'>
          Email
        </label>
        <IconInput
          iconClasses='fa-solid fa-envelope'
          inputType='text'
          placeholder='name@example.com'
          name='email'
          required={true}
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
          name='username'
          onChange={changeHandler}
        />
      </div>
      <div className='mb-1'>
        <label htmlFor='reg-name' className='required'>
          Name
        </label>
        <IconInput
          iconClasses='fa-solid fa-user'
          inputType='text'
          placeholder='your first name'
          required={true}
          id='reg-name'
          name='firstname'
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
          name='lastname'
          onChange={changeHandler}
        />
      </div>
      <div className='mb-1'>
        <label htmlFor='reg-password' className='required'>
          Password
        </label>
        <IconInput
          iconClasses='fa-solid fa-lock'
          inputType='password'
          placeholder='input password'
          id='reg-password'
          required={true}
          name='password'
          onChange={changeHandler}
        />
      </div>
      <div className='mb-1'>
        <label htmlFor='reg-repeat' className='required'>
          Repeat password
        </label>
        <IconInput
          iconClasses='fa-solid fa-lock'
          inputType='password'
          placeholder='repeat password'
          id='reg-repeat'
          required={true}
          name='repeat'
          onChange={changeHandler}
        />
      </div>
      <div className='text-center'>
        <input
          className='btn btn-primary'
          type='submit'
          onClick={registerHandler}
          value='Зарегистрироваться'
          disabled={loading}
        />
      </div>
    </form>
  )
}
