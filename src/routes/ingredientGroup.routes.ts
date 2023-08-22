import {
  addIngredientGroup,
  getAllIngredientGroups,
  getIngredientGroup,
} from '../controllers/ingredientGroup.controller'
import { requestLogger } from '../middleware/requestLogger'
import { Route } from '../types'
import { check } from 'express-validator'

export const routes: Route[] = [
  {
    method: 'post',
    path: 'ingredientGroups',
    middleware: [
      requestLogger,
      check('title')
        .matches(/^[А-Яа-я-]*$/)
        .withMessage('Only cyrrilic and "-"'),
    ],
    controller: addIngredientGroup,
  },
  {
    method: 'get',
    path: 'ingredientGroups',
    middleware: [requestLogger],
    controller: getAllIngredientGroups,
  },
  {
    method: 'get',
    path: 'ingredientGroups/:id',
    middleware: [requestLogger],
    controller: getIngredientGroup,
  },
]
