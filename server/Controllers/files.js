const fs = require('fs')
const path = require('path')
exports.GetFileurl = async (req,res) =>{
    try{
        const filename = req.params.filename
        const filePath = path.join(__dirname, '../files',filename)
        if (fs.existsSync(filePath)) {
            res.sendfile(filePath)
          } else {
            res.send("Files NOT FOUND !!")
            console.log('File does not exist.');
          }  
    }catch(err){
        res.status(404).json({ message:'Files Not found'})
    }
}