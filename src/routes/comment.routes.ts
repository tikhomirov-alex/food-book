import {
  addComment,
  deleteComment,
  editComment,
} from '../controllers/comment.controller'
import { requestLogger } from '../middleware/requestLogger'
import { Route } from '../types'

export const routes: Route[] = [
  {
    method: 'post',
    path: 'comments/:id',
    middleware: [requestLogger],
    controller: addComment,
  },
  {
    method: 'put',
    path: 'comments/:id',
    middleware: [requestLogger],
    controller: editComment,
  },
  {
    method: 'delete',
    path: 'comments/:id',
    middleware: [requestLogger],
    controller: deleteComment,
  },
]
