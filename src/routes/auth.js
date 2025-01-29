const express= require("express");

const authRouter= express.Router();
const bcrypt= require("bcrypt");
const jwt =require("jsonwebtoken");
const User = require("../models/user.js");


authRouter.post("/signUp",async (req,res)=>{

try{

    
    // validateSignupData(req);

    const {firstName, lastName, emailId,password}=req.body;

    const saltrounds=10;


    const passwordHash= await bcrypt.hash(password,saltrounds);

    // const user = new User(

    //     // firstName,lastName,emailId,password:passwordHash,
    //     req.body

    // );



    const user = new User({
        firstName,
        lastName,
        emailId,
        password:passwordHash,
        
    })

    // user.password=passwordHash;

    // console.log(user.firstName);
    
    // user.password=new_password;

    
    await user.save();
    
console.log("user was saved");
res.send("user added successfully")

}

catch(err){

    console.log("there was error");
    res.status(400).send(" erorr in saving user "+ err.message);

    
}

// res.send("user added successfully");
//   console.log("user saved successfully");

});
    
authRouter.post("/login",async (req,res)=>{

    try{
        
      const  {emailId,password}=req.body;
      const user=await User.findOne({emailId:emailId});
      if(!user){
        throw new Error("user not found with this email ID");
    
      }
    
      
        const isValidPassword=user.validatePassword(password);
    
    
       if(isValidPassword){
    
            const token =await  user.getJWT();
            // console.log(token);
    
    
            res.cookie("token",token,{expires: new Date(Date.now()+9000000),httpOnly:true});
            // res.
            res.send("user logged in successfully");
    
        }
    
        else{
    
            throw new Error("user password is invalid");
    
        }
    
        // if(!isValidPassword){
        //     throw new Error("invalid password");
        // }
    
    }
    
    catch(err){
    
        res.status(401).send("Error: "+ err.message);
    
    }
    
    });

    module.exports= authRouter;
    