import { routes as authRoutes } from './auth.routes'
import { routes as commentRoutes } from './comment.routes'
import { routes as ingredientRoutes } from './ingredient.routes'
import { routes as ingredientCategoryRoutes } from './ingredientCategory.routes'
import { routes as ingredientGroupRoutes } from './ingredientGroup.routes'
import { routes as likeRoutes } from './like.routes'
import { routes as nationalRoutes } from './national.routes'
import { routes as rateRoutes } from './rate.routes'
import { routes as recipeRoutes } from './recipe.routes'
import { routes as recipeCategoryRoutes } from './recipeCategory.routes'
import { routes as recipeGroupRoutes } from './recipeGroup.routes'
import { routes as userRoutes } from './user.routes'

export const routes = [
  ...authRoutes,
  ...commentRoutes,
  ...ingredientRoutes,
  ...ingredientCategoryRoutes,
  ...ingredientGroupRoutes,
  ...likeRoutes,
  ...nationalRoutes,
  ...rateRoutes,
  ...recipeRoutes,
  ...recipeCategoryRoutes,
  ...recipeGroupRoutes,
  ...userRoutes,
]
