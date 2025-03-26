const mongoose = require("mongoose");

const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost/training-backend-1';

mongoose.connect(mongodbUri)
  .then(() => console.info(`Successfully connected to database ${mongodbUri}`))
  .catch(error => console.error(`An error while connecting to database ${mongodbUri}`))