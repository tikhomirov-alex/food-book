import express from 'express'
import 'dotenv/config'
import { routes } from './routes'
import dbConnect from './data/database'
import path from 'path'
import upload from 'express-fileupload'

const app = express()

app.use(express.json())
app.use(upload())
app.use('/upload', express.static(path.join(__dirname, './upload')))

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
