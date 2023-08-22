import { getUser } from '../controllers/users.controller'
import { requestLogger } from '../middleware/requestLogger'
import { Route } from '../types'

export const routes: Route[] = [
  {
    method: 'get',
    path: 'users/:id',
    middleware: [requestLogger],
    controller: getUser,
  },
]
