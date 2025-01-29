const express= require("express");

const {userAuth,id}= require("../middleware/auth.js");

const requestRouter= express.Router();

requestRouter.post("/sendConnectionRequest",userAuth,(req,res)=>{

    res.send(req.user.firstName + " is sending connection request");

})

module.exports= requestRouter;
