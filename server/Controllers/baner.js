
const baner = require('../Models/Baner')


exports.read = async (req, res)=> {
    try{
        const Readbaner = await baner.find({}).exec()
        res.send(Readbaner)
    }catch(err){
        res.status(500).send('Server Errors!')
    }
}
exports.post = async (req,res)=>{
    try{
        const Addbaner = await baner(req.body).save()
        res.send(Addbaner)
    }catch(err){
        res.status(500).send('Server Errors !')
    }
}