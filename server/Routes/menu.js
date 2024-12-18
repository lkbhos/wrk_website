const express = require('express')
const route = express.Router()
const {read,post} = require('../Controllers/menu')

route.get('/menu',read)
route.post('/menu',post)




module.exports = route