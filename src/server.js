import express from 'express'
import mongoose from 'mongoose'

import userRoute from './../src/routes/userRoute'
import { commonMiddleware } from './middlewares'

const app = express()
const PORT = process.env.PORT || 8080

commonMiddleware(app, express)

app.use(userRoute)

app.use((req, res, next) => {
  res.status(404).send('You seem to be lost')
})

app.listen(PORT, () => {
  console.log(`Server is lauched on port ${PORT}`)
})
