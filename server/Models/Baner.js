const mongoose = require('mongoose')

const Baner = mongoose.Schema({
    txt:{
        type: String
    },
    name:{
        type: String
    },
    addr:{
        type: String
    },
    vision:{
        type: String
    },
    img_ceo:{
        type: String
    },
    name_ceo:{
        type: String
    },
    position_ceo:{
        type: String
    }
},{timestamps:true})

module.exports = mongoose.model('baner',Baner)