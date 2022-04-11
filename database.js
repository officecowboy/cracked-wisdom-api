//Import Mongoose Library
let mongoose = require('mongoose')

// Connect to MongoDB
const MONGODB_URI = process.env.PROD_MONGODB || `mongodb+srv://officecowboy:lonelycomputer@cracked-cluster-1.9smdo.mongodb.net/cracked-wisdom-api?retryWrites=true&w=majority`
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(MONGODB_URI, mongooseConfig)

// Event Listeners
mongoose.connection.on('connected', () => console.log("Connected to database"))
mongoose.connection.on('disconnected', () => console.log("Disconnected from database"))
mongoose.connection.on('error', error => console.error("Database error", error))

// Export the connection
module.exports = mongoose