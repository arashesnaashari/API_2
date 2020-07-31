const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors') 
require('dotenv/config')

//app.use(cors()) lets every one use our API

app.use(bodyParser.json())
const newLocal = 'mongodb+srv://admin:admin@cluster0.dcr08.mongodb.net/restapi?retryWrites=true&w=majority'
//Middleware
// app.use('/posts',() => {
//     console.log('This is middle ware');
// })

//Connect to DB 
mongoose.connect(
    newLocal,
    { useNewUrlParser: true ,useUnifiedTopology: true},
    () => console.log('Connect to DB'))


//Routes
app.get('/',(req,res) => {
    res.send('home')
})
app.use('/posts',require('./routes/posts'))

app.listen(3000,console.log('Server start'))