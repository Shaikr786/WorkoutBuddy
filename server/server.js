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
    origin: [""],
    methods: ["POST", "GET"],
    credentials: true
  }));

app.use('/api/workouts' ,workoutRoutes)
app.use('/api/user' ,UserRoutes)

mongoose.connect(process.env.URI).then(()=>{
    app.listen(process.env.PORT ,()=>{
        console.log("connected to db and listening to port 4000")
    })
}).catch((error)=>{
    console.log(error)
})
app.get('/' ,(req ,res) =>{
    res.json({messg:'welcome to app'})
})

module.exports = app