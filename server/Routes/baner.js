const express = require('express')
const route = express.Router()

const { read,post } = require('../Controllers/baner')


route.get('/baner',read)

route.post('/baner',post)

module.exports = route