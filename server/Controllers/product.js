
const product = require('../Models/Product')



exports.read = async (req,res) => {
    try{
        const Productlist = await product.find({}).exec()
        res.send(Productlist)
    }catch(err){
        res.status(500).send('Server Error')
    }
}
exports.list = async (req,res) => {
    try{
        res.send("Hello product List")
    }catch(err){
        res.status(500).send('Server Error')
    }
}
exports.post = async (req,res) => {
    try{
        console.log(req.body)
        const addproduct = await product(req.body).save()
        res.send(addproduct)
    }catch(err){
        res.status(500).send('Server Error')
    }
}
exports.update = async (req,res) => {
    try{
        res.send("Hello product Update")
    }catch(err){
        res.status(500).send('Server Error')
    }
}
exports.removal = async (req,res) => {
    try{
        res.send("Hello product Delete")
    }catch(err){
        res.status(500).send('Server Error')
    }
}

