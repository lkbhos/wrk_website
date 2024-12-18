const logo = require('../Models/Logo')



exports.read = async (req,res) => {
    try{
        const Readlogo = await logo.find({}).exec()
        res.send(Readlogo)
    }catch(err){
        res.status(500).send('Server errors!')
    }
}

exports.post = async (req,res) =>{
    try{
        const Addlogo = await logo(req.body).save()
        res.send(Addlogo)
    }catch(err){
        res.status(500).send("Server Errors!")
    }
}
