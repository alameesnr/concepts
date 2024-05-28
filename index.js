const express = require('express')
const mongoose = require('mongoose')
const Exammod = require('./models/ExamModel.js')



const cors = require('cors')
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors())


app.get('/', (req, res)=>{
    res.send("Welcome to my Page")
})

app.listen(3005, (req, res)=>{
    console.log("Server is running at 3005")
})



mongoose.connect("mongodb+srv://concepts:concepts1234@cluster0.jrpfcbb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connection Verified")
})

.catch(()=>{
    console.log("Unverified connection")
})