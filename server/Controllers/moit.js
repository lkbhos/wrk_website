const { isValidObjectId } = require('mongoose')
const moit = require('../Models/Moit')

exports.list = async (req,res) => {
    const id = req.params.id
    const query = {fc_year: id}
    try{
        const moitlist = await moit.find(query).select({_id:0,fc_year:0}).sort({nums:1}).exec()
        if(moitlist.length == 0){
            res.status(500).send('Not Data')
        }else{
            res.send(moitlist)
        }
    }catch(err){
        res.status(500).send('Not Data')
    }
}