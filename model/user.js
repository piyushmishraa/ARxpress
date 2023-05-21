const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String
    },
    img:{
        data:Buffer,contentType: String
    }
    
});

const user=mongoose.model('user',userScheme);

module.exports=user;