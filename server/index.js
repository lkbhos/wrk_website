const express = require('express')
const morgan = require('morgan')
const { readdirSync } =require('fs')
const cors = require('cors')
const bodyParser = require('body-parser')

const connectDB = require('./Config/db')


const app = express()

connectDB()
app.use('/images',express.static(__dirname + '/images'))
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json({ limit: '30mb'}))

readdirSync('./Routes').map((r)=> app.use('/api', require('./Routes/'+ r)))

 
app.listen(8081, '0.0.0.0',()=> console.log('API RUNNING PORT 8081'))