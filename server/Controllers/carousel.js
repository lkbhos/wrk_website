const carousel = require('../Models/Carousel')

exports.read = async( req, res)=> {
    try{
        const Readcarousel = await carousel.find({}).exec()
        res.send(Readcarousel)
    }catch(err){
        res.status(500).send('Server Errors !')
    }
}

exports.post = async (req, res) => {
    try{
        const Addcarousel = await carousel(req.body).save()
        res.send(Addcarousel)
    }catch(err){
        res.status(500).send('Server errors !')
    }
}