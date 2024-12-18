const express = require('express')
const route = express.Router()
const { list, post, listMoit } = require('../Controllers/moit')


route.get('/moit/:id',list)

route.post('/moit',post)

route.get('/moit/:year/:id',listMoit)

module.exports = route