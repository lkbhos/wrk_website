const express = require('express')
const route = express.Router()
const {Geturl} = require('../Controllers/images')

route.get('/images/:filename',Geturl)


module.exports = route