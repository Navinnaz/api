const express = require("express")
require("dotenv").config()
const connectDB = require("./config/db")
const User = require("./model/user")
connectDB()

const PORT = 3020
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send("New welcome message to test nodeMon")
})

app.post("/add", (req, res) => {
  const { number1, number2 } = req.body
  const sum = number1 + number2
  res.send("The sum is " + sum)
})

app.post("/api/user/add", async (req, res) => {
  const { name, email, age, password } = req.body
  const user = new User({
    name,
    email,
    age,
    password,
  })
  await user.save()
  res.send(user)
})

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT)
})