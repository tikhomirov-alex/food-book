import React from 'react'
import { IconInput } from '../../components/iconInput/IconInput'

export const RegisterPage: React.FC = () => {
  return (
    <section className='container text-white mt-5'>
      <h1 className='text-center'>Регистрация</h1>
      <div className='row mt-3'>
        <div className='col-4 offset-4'>
          <form>
            <label htmlFor='reg-email'>Email</label>
            <IconInput
              iconClasses='fa-solid fa-envelope'
              inputType='text'
              placeholder='name@example.com'
              id='reg-email'
            />

            <label htmlFor='reg-username'>Username</label>
            <IconInput
              iconClasses='fa-solid fa-at'
              inputType='text'
              placeholder='username'
              id='reg-username'
            />

            <label htmlFor='reg-name'>Name</label>
            <IconInput
              iconClasses='fa-solid fa-user'
              inputType='text'
              placeholder='your first name'
              id='reg-name'
            />

            <label htmlFor='reg-surname'>Surname</label>
            <IconInput
              iconClasses='fa-solid fa-user'
              inputType='text'
              placeholder='your last name'
              id='reg-surname'
            />

            <label htmlFor='reg-password'>Password</label>
            <IconInput
              iconClasses='fa-solid fa-lock'
              inputType='password'
              placeholder='input password'
              id='reg-password'
            />

            <label htmlFor='reg-repeat'>Repeat password</label>
            <IconInput
              iconClasses='fa-solid fa-lock'
              inputType='password'
              placeholder='repeat password'
              id='reg-repeat'
            />
            <div className='text-center'>
              <input
                className='btn btn-primary mt-2'
                type='submit'
                value='Зарегистрироваться'
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
