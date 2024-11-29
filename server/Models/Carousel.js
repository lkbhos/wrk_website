const mongoose = require('mongoose')

const Carousel = mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    img:{
        type: String
    },
    path:{
        type: String
    }
},{timestamps:true})

module.exports = mongoose.model('carousel',Carousel)