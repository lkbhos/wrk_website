const express = require('express')
const route = express.Router()

const {read, post} = require('../Controllers/carousel')

route.get('/carousel',read)

route.post('/carousel',post)



module.exports = route