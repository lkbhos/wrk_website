const mongoose = require('mongoose')


const subtitleSchema = mongoose.Schema({
    "nums":{
        type: Number
    },
    "title":{
        type : String
    },
    "path":{
        type : String
    },
    "file_name":{
        type : String
    }
})


const childrenSchema = mongoose.Schema({
    "nums":{
        type: Number
    },
    "title":{
        type : String
    },
    "path":{
        type : String
    },
    "file_name":{
        type : String
    },
    "subtitle":[subtitleSchema]

})
const titleSchema = mongoose.Schema({
    "nums":{
        type: Number
    },
    "fc_year":{
        type : Number
    },
    "title":{
        type : String
    },
    "childrens":[childrenSchema]
})

module.exports = mongoose.model('moit',titleSchema)