import { addNational, getAllNationals, getNational } from '../controllers/nationals.controller'
import { requestLogger } from '../middleware/requestLogger'
import { Route } from '../types'
import { check } from 'express-validator'

export const routes: Route[] = [
  {
    method: 'post',
    path: 'nationals',
    middleware: [
      requestLogger,
      check('title')
        .exists()
        .matches(/^[А-Яа-я-]*$/)
        .withMessage('Only cyrrilic and "-"'),
    ],
    controller: addNational,
  },
  {
    method: 'get',
    path: 'nationals',
    middleware: [requestLogger],
    controller: getAllNationals,
  },
  {
    method: 'get',
    path: 'nationals/:id',
    middleware: [requestLogger],
    controller: getNational,
  },
]
