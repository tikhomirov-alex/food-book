import { setLike, unsetLike } from '../controllers/like.controller'
import { requestLogger } from '../middleware/requestLogger'
import { Route } from '../types'

export const routes: Route[] = [
  {
    method: 'post',
    path: 'likes/:comment_id',
    middleware: [requestLogger],
    controller: setLike,
  },
  {
    method: 'delete',
    path: 'likes/:comment_id',
    middleware: [requestLogger],
    controller: unsetLike,
  },
]
