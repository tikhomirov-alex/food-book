import { check } from 'express-validator'
import { requestLogger } from '../middleware/requestLogger'
import { Route } from '../types'
import {
  addRecipeGroup,
  getAllRecipeGroups,
  getRecipeGroup,
} from '../controllers/recipeGroup.controller'

export const routes: Route[] = [
  {
    method: 'post',
    path: 'recipeGroups',
    middleware: [
      requestLogger,
      check('title')
        .matches(/^[А-Яа-я-]*$/)
        .withMessage('Only cyrrilic and "-"'),
    ],
    controller: addRecipeGroup,
  },
  {
    method: 'get',
    path: 'recipeGroups',
    middleware: [requestLogger],
    controller: getAllRecipeGroups,
  },
  {
    method: 'get',
    path: 'recipeGroups/:id',
    middleware: [requestLogger],
    controller: getRecipeGroup,
  },
]
