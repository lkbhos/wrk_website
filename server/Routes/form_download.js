const express = require('express')
const route = express.Router()
const { read, post } = require('../Controllers/form_download')

route.get('/form_download',read)

route.post('/form_download',post)

module.exports = route