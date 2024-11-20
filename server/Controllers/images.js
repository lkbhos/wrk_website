const fs = require('fs')
const path = require('path')
exports.Geturl = async (req,res) =>{
    try{
        const filename = req.params.filename
        const filePath = path.join(__dirname, '../images',filename)
        if (fs.existsSync(filePath)) {
            res.sendfile(filePath)
          } else {
            res.send("IMAGES NOT FOUND !!")
            console.log('File does not exist.');
          }  
    }catch(err){
        res.status(404).json({ message:'Images Not found'})
    }
}
