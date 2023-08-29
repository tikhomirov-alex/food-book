import { uploadFile } from '../controllers/file.controller'
import { requestLogger } from "../middleware/requestLogger"
import { Route } from "../types"

export const routes: Route[] = [
  {
    method: 'post',
    path: 'upload',
    middleware: [requestLogger],
    controller: uploadFile
  }
]
