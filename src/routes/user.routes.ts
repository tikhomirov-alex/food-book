import { getUserById, getUserByUsername } from '../controllers/users.controller'
import { requestLogger } from '../middleware/requestLogger'
import { Route } from '../types'

export const routes: Route[] = [
  {
    method: 'get',
    path: 'users/id/:id',
    middleware: [requestLogger],
    controller: getUserById,
  },
  {
    method: 'get',
    path: 'users/:username',
    middleware: [requestLogger],
    controller: getUserByUsername,
  },
]
