const express= require("express");
const userRouter= express.Router();
const User = require("../models/user.js");

const bcrypt= require("bcrypt");

userRouter.get("/user", async (req,res)=>{

    // await User.syncIndexes();

    const userEmail=req.body.emailId;

    try{


        const users = await User.findOne({emailId:userEmail});
        if(users.length == 0) {
            res.send("user not found");
        }
        else
        res.send(users);

    }

    catch(err){

        res.status(401).send("something went wrong"+err.message);
    }

})


userRouter.patch("/user",async (req,res)=>{
    
    const email=req.body.emailId;
    const data= req.body;
        // console.log(email);
    const userId=req.body._id;
    if(userId===undefined) {
        res.status(400).send("user not found");
    }

    const filter={_id:userId};
    const update=data;
    // console.log(update);
    const options={new:true};

try{

    
const doc = await User.findOneAndUpdate(filter,update,options);
console.log(doc);
res.send("user updated successfully");

}

catch(err){
    res.status(400).send("something went wrong"+ err.message);
}

})



userRouter.delete("/user",async (req,res)=>{

    const userId=req.body._id;

    try{
   await User.findByIdAndDelete(userId);
   res.send("user deleted successfully");

    }

    catch(err){
        res.status(400).send("something went wrong"+ err.message)
    }


})

module.exports= userRouter;
