import { login, signup } from '../controllers/auth.controller'
import { requestLogger } from '../middleware/requestLogger'
import { Route } from '../types'
import { check } from 'express-validator'

export const routes: Route[] = [
  {
    method: 'post',
    path: 'auth/register',
    middleware: [
      requestLogger,
      check('email').normalizeEmail().isEmail().withMessage('Incorrect email'),
      check('password')
        .isLength({ min: 8 })
        .withMessage('Minimal password length is 8 symbols'),
      check('username')
        .matches(/^[A-z][A-z-_0-9]*$/)
        .withMessage(
          'Only latin, digits and symbols "-", "_" and starts from a letter'
        ),
      check('firstname')
        .matches(/^[А-Яа-я]*$/)
        .withMessage('Only cyrrilic'),
      check('lastname')
        .matches(/^[А-Яа-я-]*$/)
        .withMessage('Only cyrrilic and "-"'),
    ],
    controller: signup,
  },
  {
    method: 'post',
    path: 'auth/login',
    middleware: [
      requestLogger,
      check('email').normalizeEmail().isEmail().withMessage('Incorrect email'),
      check('password').exists().withMessage('Input password'),
    ],
    controller: login,
  },
]
