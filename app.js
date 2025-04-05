require('dotenv').config
const mongoose = require("mongoose")
const createError = require("http-errors")
const express = require("express")
const logger = require("morgan")

require('./config/db.config')

const app = express()
app.use(express.json())
app.use(logger('dev'))

const api = require("./config/routes.config")
app.use("/v1", api)

app.use((req, res, next) => {
  next(createError(404, "Route not found"))
})

app.use((error, req, res, next) => {

  if(error instanceof mongoose.Error.ValidationError){
    error = createError(400, error)
  } else {
    error = createError(500, error)
  }

  error = error.status ? error : createError(500, error)
  console.error(error);

  const errors = !error.errors ? undefined : Object.keys(error.errors).reduce((errors, errorKey) => {
    errors[errorKey] = error.errors[errorKey].message || error.errors[errorKey]
    return errors
  }, {})
  
  const data = {
    message: error.message,
    errors
  }
  res.status(error.status).json(data)

})


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Connected to port ${port}`))