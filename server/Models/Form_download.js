const mongoose = require('mongoose')


const childrenSchema = mongoose.Schema({
    "title":{
        type : String
    },
    "pdf_name":{
        type : String
    },
    "make_by":{
        type: String
    }
},{timestamps:true})


const form_download = mongoose.Schema({

    "title":{
        type: String
    },
    "childrens":[childrenSchema]

},{timestamps:true})

module.exports = mongoose.model('form_download',form_download)