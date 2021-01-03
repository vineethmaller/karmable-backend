import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'

export const commonMiddleware = (app, express) => {
  app.use(express.json({ limit: '10kb' }))
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())
  app.use(helmet())
  app.use(compression())

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
}
