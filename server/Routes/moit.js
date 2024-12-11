const express = require('express')
const route = express.Router()
const { list } = require('../Controllers/moit')


route.get('/moit/:id',list)


module.exports = route