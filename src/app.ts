import express from 'express'
import 'dotenv/config'
import { routes } from './routes'
import dbConnect from './data/database'

const app = express()

app.use(express.json())

routes.forEach((route) => {
  const { method, path, middleware, controller } = route
  app[method](`/api/${path}`, ...middleware, controller)
})

const PORT = process.env.PORT

const bootstrap = async () => {
  try {
    await dbConnect()
    app.listen(PORT, () => {
      console.log(`Server has been started on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.log('Server start error: ', err)
  }
}

bootstrap()
