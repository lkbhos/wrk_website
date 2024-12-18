const mongoose = require('mongoose');
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

exports.listMoit = async (req, res) => {
  try {
    const dataId = req.params.id;
    const datayear = req.params.year;

    // ตรวจสอบว่ามีการส่ง datayear มาหรือไม่
    if (!datayear) {
      return res.status(400).send({ error: "Missing year parameter" });
    }

    // ตรวจสอบว่า dataId มีรูปแบบที่ถูกต้องหรือไม่
    if (!mongoose.Types.ObjectId.isValid(dataId)) {
      return res.status(400).send({ error: "Invalid ID format" });
    }

    const subtitleId = new mongoose.Types.ObjectId(dataId);

    // ค้นหา subtitle._id ก่อน
    let result = await moit.aggregate([
      { $unwind: "$childrens" },
      { $unwind: "$childrens.subtitle" },
      {
        $match: {
          "fc_year": parseInt(datayear), // แปลง datayear เป็นตัวเลข
          "childrens.subtitle._id": subtitleId,
        }
      },
      {
        $project: {
          'childrens.subtitle' : 1,
          _id: 0
        }
      }
    ]);

    // หากไม่พบใน subtitle ให้ค้นหาใน children แทน
    if (result.length === 0) {
      result = await moit.aggregate([
        { $unwind: "$childrens" },
        {
          $match: {
            "fc_year": parseInt(datayear),
            "childrens._id": subtitleId,
          }
        },
        {
          $project: {
            'childrens': 1,
            _id: 0
          }
        }
      ]);
    }

    // ตรวจสอบผลลัพธ์อีกครั้ง
    if (result.length === 0) {
      return res.status(404).send({ message: "No data found" });
    }

    res.send(result);

  } catch (err) {
    console.error(err); // เพิ่มการ log ข้อผิดพลาด
    res.status(500).send({ error: "Internal Server Error", details: err.message });
  }
};

exports.post = async (req,res) =>{
    try{
        const addMoit = await moit(req.body).save()
        res.send(addMoit)
    }catch(err){
        res.status(500).send('Server Error')
    }
}