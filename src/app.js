const express= require('express');

const app =express();

const connectDB=require("./config/database.js");

const User = require("./models/user.js");
const {userAuth,id}= require("./middleware/auth.js");

const bcrypt= require("bcrypt");
const {validateSignupData}= require("./utils/validation.js");
const cookieParser = require('cookie-parser');
const jwt =require("jsonwebtoken");


app.use(express.json()); // middleware

app.use(cookieParser());


const authRouter= require("./routes/auth.js");
const feedRouter = require("./routes/feed.js");
const profileRouter= require("./routes/profile.js");
const requestRouter= require("./routes/requests.js");
const userRouter =require("./routes/user.js");

// app.use("/",authRouter,feedRouter,profileRouter,requestRouter,userRouter);
app.use("/",authRouter);
app.use("/",feedRouter);
app.use("/",profileRouter)
app.use("/",requestRouter)
app.use("/",userRouter);



connectDB().then(()=>{


    console.log("database connected successfully");

    app.listen(8086,()=>{

        console.log("server is successfully running at port 8086")
    
    });



}).catch((err)=>{

    console.log("not connected to the database"+ err.message);

  })

  