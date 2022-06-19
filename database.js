//Import Mongoose Library
let mongoose = require('mongoose')

//Import dotenv pacakage
require('dotenv').config();

// Connect to MongoDB
const DATABASE_NAME = 'crackedwisdom'
const MONGODB_URI = process.env.PROD_MONGODB || `mongodb://127.0.0.1:27017/${DATABASE_NAME}`
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(MONGODB_URI, mongooseConfig)

// Event Listeners
mongoose.connection.on('connected', () => console.log("Connected to database"))
mongoose.connection.on('disconnected', () => console.log("Disconnected from database"))
mongoose.connection.on('error', error => console.error("Database error", error))

// Export the connection
module.exports = mongoose