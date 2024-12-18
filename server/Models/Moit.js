const mongoose = require('mongoose')
const subtitleSchema = mongoose.Schema({
    "nums":{
        type: Number
    },
    "title":{
        type : String
    },
    "make_by": {
        type : String
    },
    "path":{
        type : String
    },
    "pdfurl":{
        type : String
    },
    "fc_year":{
        type : String
    },
},{timestamps:true})


const childrenSchema = mongoose.Schema({
    "nums":{
        type: Number
    },
    "title":{
        type : String
    },
    "make_by": {
        type : String
    },
    "path":{
        type : String
    },
    "pdfurl":{
        type : String
    },
    "fc_year":{
        type : String
    },
    "subtitle":[subtitleSchema]

},{timestamps:true})
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
},{timestamps:true})


module.exports = mongoose.model('moit',titleSchema)