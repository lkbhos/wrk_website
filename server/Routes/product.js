const express = require('express')
const route = express.Router()

const {read, list, post, update, removal} = require('../Controllers/product')

route.get('/product',read)
route.get('/product/:id',list)
route.post('/product',post)
route.put('/product',update)
route.delete('/product',removal)

module.exports = route