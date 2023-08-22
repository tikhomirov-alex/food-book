import { check } from 'express-validator'
import { requestLogger } from '../middleware/requestLogger'
import { Route } from '../types'
import {
  addRecipeCategory,
  getRecipeCategories,
} from '../controllers/recipeCategory.controller'

export const routes: Route[] = [
  {
    method: 'post',
    path: 'recipeCategories',
    middleware: [
      requestLogger,
      check('title')
        .matches(/^[А-Яа-я-]*$/)
        .withMessage('Only cyrrilic and "-"'),
    ],
    controller: addRecipeCategory,
  },
  {
    method: 'get',
    path: 'recipeCategories',
    middleware: [requestLogger],
    controller: getRecipeCategories,
  },
]
