const path = require('path')
const fileURLToPath = require('url')
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const UserRoutes = require('./routes/user')
//express app
const app = express()


// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

app.use(express.json())



app.use(cors({
    origin: ["https://workout-buddy-khaki.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }));

app.use('/api/workouts' ,workoutRoutes)
app.use('/api/user' ,UserRoutes)
mongoose.connect(process.env.URI)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log(error));

// Export the Express app for Vercel
module.exports = app;

app.get('/' ,(req ,res) =>{
    res.json({messg:'welcome to app'})
})

