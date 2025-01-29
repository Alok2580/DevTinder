const express= require("express");
const profileRouter= express.Router();
const {userAuth,id}= require("../middleware/auth.js");

profileRouter.get("/profile", userAuth ,async (req,res)=>{

    try{

      const user =req.user;
    if(!user) throw new Error("user does not exit ");
    // console.log(user);
    res.send(user);
    }


    catch(err){
        res.status(401).send("something went wrong : "+ err.message);
    }


})


module.exports= profileRouter;