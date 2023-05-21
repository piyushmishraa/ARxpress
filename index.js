const express = require("express");
const mongoose= require("mongoose");
const app= express();
const bodyparser= require('body-parser');
const MongooseError = require('mongoose');
const multer  = require('multer')
const fs =require('fs');
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
const storage=multer.diskStorage({
  destination:function(req,file,cb){
    return cb(null,"./uploads");
  },
  filename : function(req,file,cb){
    return cb(null,`${Date.now()}-${file.originalname}`);
  }
})

const upload =multer({storage});
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(__dirname));

mongoose.connect('mongodb://127.0.0.1:27017/userdata')
.then(()=>{
    console.log("database connection done");
}).catch(()=>{
    console.log("something went wrong");
})

const user=require("./model/user");

app.set("view engine","ejs")

app.get("/",(req,res)=>{
  res.render("index.ejs")
});

app.post("/",upload.single("profileimage"),async(req,res)=>{
//  var img=fs.readFileSync(req.file.path)

//  var encode_image=img.toString('base64')

//  var finaleimg={
//   contentType:req.file.mimetype,
//   path:req.file.path,
//   image:new Buffer.from(encode_image,'base64')

//  };

//  user.create(finaleimg)
//  .then((result)=>{
//   console.log('hogya')
//  })
//  .catch((err)=>{
//   console.log(err);
//  })
})

app.listen(process.env.PORT || 3000,function(){
    console.log("server is running on port 3000");
  });

  //M_User.create(data)
// .then((result) => {
//   res.send({ kq: 1, msg: 'Đã thêm thành công' })
// })
// .catch((err) => {
//   res.send({ kq: 0, msg: 'kết nối DB thất bại' })
// })