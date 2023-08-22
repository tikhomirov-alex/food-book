import { addIngredientCategory } from '../controllers/ingredientCategory.controller'
import { requestLogger } from '../middleware/requestLogger'
import { Route } from '../types'
import { check } from 'express-validator'

export const routes: Route[] = [
  {
    method: 'post',
    path: 'ingredientCategories',
    middleware: [
      requestLogger,
      check('title')
        .matches(/^[А-Яа-я-]*$/)
        .withMessage('Only cyrrilic and "-"'),
    ],
    controller: addIngredientCategory,
  },
]
