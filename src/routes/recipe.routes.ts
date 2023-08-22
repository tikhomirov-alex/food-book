import { check } from 'express-validator'
import {
  addRecipe,
  getAllRecipes,
  getRecipeById,
  getRecipesByAuthor,
  getRecipesByIngredient,
  getRecipesByNational,
  getRecipesByTitle,
} from '../controllers/recipe.controller'
import { requestLogger } from '../middleware/requestLogger'
import { Route } from '../types'

export const routes: Route[] = [
  {
    method: 'post',
    path: 'recipes/:user_id',
    middleware: [
      requestLogger,
      check('title')
        .exists()
        .matches(/^[А-Яа-я- ]*$/)
        .withMessage('Only cyrrilic and "-"'),
      check('description').exists(),
      check('composition').exists(),
      check('recipeStages').exists(),
    ],
    controller: addRecipe,
  },
  {
    method: 'get',
    path: 'recipes',
    middleware: [requestLogger],
    controller: getAllRecipes,
  },
  {
    method: 'get',
    path: 'recipes/:id',
    middleware: [requestLogger],
    controller: getRecipeById,
  },
  {
    method: 'get',
    path: 'recipes/title/:title',
    middleware: [requestLogger],
    controller: getRecipesByTitle,
  },
  {
    method: 'get',
    path: 'recipes/ingredient/:ingredient',
    middleware: [requestLogger],
    controller: getRecipesByIngredient,
  },
  {
    method: 'get',
    path: 'recipes/national/:national',
    middleware: [requestLogger],
    controller: getRecipesByNational,
  },
  {
    method: 'get',
    path: 'recipes/author/:user_id',
    middleware: [requestLogger],
    controller: getRecipesByAuthor,
  },
]
