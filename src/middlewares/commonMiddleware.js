const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const morgan = require('morgan')

exports.commonMiddleware = (app, express) => {
  app.use(express.json({ limit: '10kb' }))
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())
  app.use(helmet())
  app.use(compression())

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
}
