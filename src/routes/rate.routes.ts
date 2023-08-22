import { addRate, editRate } from '../controllers/rate.controller'
import { requestLogger } from '../middleware/requestLogger'
import { Route } from '../types'

export const routes: Route[] = [
  {
    method: 'post',
    path: 'rates/:id',
    middleware: [requestLogger],
    controller: addRate,
  },
  {
    method: 'put',
    path: 'rates/:id',
    middleware: [requestLogger],
    controller: editRate,
  },
]
