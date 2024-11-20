
const menu = require('../Models/Menu')

exports.read = async (req, res)=>{
    try{
        const Readmenu = await menu.find({}).exec()
        res.send(Readmenu)
    }catch(err){
        res.status(500).send(err)
    }
}

exports.post = async (req, res)=>{
    try{
        const Addmenu = await menu(req.body).save()
        res.send(Addmenu)
    }catch(err){
        res.status(500).send('Server Error')
    }
}