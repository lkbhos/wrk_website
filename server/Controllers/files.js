const fs = require('fs')
const path = require('path')
exports.GetFileurl = async (req,res) =>{
    try{
        const filename = req.params.filename
        const filePath = path.join(__dirname, '../files',filename)
        if (fs.existsSync(filePath)) {
            res.sendfile(filePath)
          } else {
            res.status(404)
            console.log("404 File not found !")
          }  
    }catch(err){
        res.status(500).json({ message:'Sever Error !'})
    }
}