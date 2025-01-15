const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        // unique:true
    },

    lastName:{
        type:String
    },
    emailId:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true,
        minlength:10
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:String
    }
    ,
    gender:{
        type:String
    },
    bio:{
        type:String,
        default:"hi I am on on devTinder , I want ot connect with other developers"
    },
    skills:{
        type:[String]
    }

})

module.exports=mongoose.model("User",userSchema);
