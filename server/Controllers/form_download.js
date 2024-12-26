const mongoose = require('mongoose');
const form_download = require('../Models/Form_download')

exports.read = async (req,res) => {
    try{
        const from_show = await form_download.find({}).exec()
        res.send(from_show)
    }catch(err){
        res.status(500).send(err)
    }
}

exports.post = async (req,res) => {
    try{
        const from_add = await form_download(req.body).save()
        res.send(from_add)
    }catch(err){
        res.status(500).send(err)
    }
}
