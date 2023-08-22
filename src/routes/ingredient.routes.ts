import { check } from 'express-validator'
import { requestLogger } from '../middleware/requestLogger'
import { Route } from '../types'
import { addIngredient } from '../controllers/ingredient.controller'

export const routes: Route[] = [
  {
    method: 'post',
    path: 'ingredients',
    middleware: [
      requestLogger,
      check('title')
        .matches(/^[А-Яа-я-]*$/)
        .withMessage('Only cyrrilic and "-"'),
    ],
    controller: addIngredient,
  },
]
