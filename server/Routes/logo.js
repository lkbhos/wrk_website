const express = require('express')
const route = express.Router()

const {read,post} = require('../Controllers/logo')

route.get('/logo',read)

route.post('/logo',post)




module.exports = route