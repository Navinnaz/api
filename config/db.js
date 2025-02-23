const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connection SUCCESS")
  } catch (error) {
    console.log("MONGODB Connection Failed", error)
    process.exit(1)
  }
}

module.exports = connectDB