const express= require('express');

const app =express();
// app.use("/pilla",[(req, res,next)=>{

//     // res.send("have you requested for the pilla. so pilla is here");
// console.log("outer pilla ran successfully");
// next();

// // res.send("hello world message from the server");
// },(req,res,next)=>{
//     console.log("2nd response")
//     // res.send("  2 hello this is nalla under nested pilla");
//     next();

// },(req,res,next)=>{
//     console.log("3rd response");
//     // res.send("3 hello this is nalla under nested pilla");
//     next();

// },(req,res,next)=>{
//     console.log("4th response");
//     // res.send("4 hello this is nalla under nested pilla");
//     next()
// },(req,res,next)=>{
//     console.log("5th response");
//     res.send("hi this is 5th last response");
// }]);

// app.use("/user/:userID/:password",(req,res)=>{
//     console.log(req.params);
//     res.send("hey user how are you");

// })

// app.get("/user",(req,res)=>{

//     res.send({Name:"pilla", age:10 } );

// })


// app.post("/user",(req,res)=>{
//     res.send("user data successfully");
// })
// app.patch("/user",(req,res)=>{
//     res.send("user data was updated successfully");
// })
// app.delete("/user",(req,res)=>{
//     res.send("user data deleted successfully");
// })

// app.use("/lol",(req, res)=>{
 
//     res.send("do you know pilla is LOL");

// })


// app.use("/", (req,res)=>{
//     res.send("this is main page");
// })



// app.use("/user",(req,res,next)=>{
//     console.log("1st response");
//     // res.send("this is the 1st response");
//     next();
// });


// app.use("/user",(req,res,next)=>{

//     console.log("this is 2nd response");
//     next();
//     // res.send("hi hello this is 2nd response");

// })

// const {adminAuth,userAuth}= require("../middleware/auth");
// app.use("/admin",adminAuth);
// // app.use("/admin",(req,res,next)=>{
// //     console.log("data for the admin");
// //     let token="xyz";
// //     if(token=="xyz"){

// //         // res.send("here is data for the admin");
// //         next();
// //     }

// //     else{
// //         res.status(401);
// //         res.send("unauthorized access");
      
// //     }

// // });

// // app.use("/user",userAuth);

// app.use("/user/getdata",userAuth,(req,res)=>{
//     res.send("data sent successfully to user");
// })

// app.use("/user/login",(req,res)=>{
//     res.send("user logged in successfully");
// })


// app.use("/admin/getUser",(req,res)=>{
//         console.log("admin is authorised to get useuser data");
//         res.send("data sent successfully");

//         // let token="ereferere";
//         // if(token=='xyz'){
//         //     res.send("sending the admin userData");
//         // }
//         // else{
//         //     res.send("admin cannot get userData");

//         // }
//     });

//     app.use("/admin/delete",(req,res)=>{
//         res.send("data deleted successfully");
//     })

// app.use("/user",(req,res)=>{
//     try{
//         throw new Error("lul");
//         res.send("hello user how are you");
//     }
//    catch(err){
//     res.send("handled the error using try cathch");
//    }


// })
// app.use("/",(err,req,res,next)=>{
//     if(err){
//         res.status(501).send("something went wrong");
//     }
// })


const connectDB=require("./config/database.js");

const User = require("./models/user.js");
// const{ inadminAuth,userAuth,index_sync}=require("./middleware/auth.js")

app.use(express.json()); // middleware 

// searching a user via its emailId

app.get("/user", async (req,res)=>{
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
        res.status(401).send("something went wrong");
    }

})




// feed api / get all the users;

app.get("/feed",async (req,res)=>{

    try{
        const users=  await User.find({});
        if(users.length==0){
            res.status(400).send("no user in your feed");
        }
        else{
            res.send(users);
        }
    }

    catch(err){

        res.status(400).send("something went wrong");

    }    


})

// deleting a user


app.delete("/user",async (req,res)=>{
    const userId=req.body._id;

    try{
   await User.findByIdAndDelete(userId);
   res.send("user deleted successfully");

    }

    catch(err){
        res.status(400).send("something went wrong")
    }


})

// updating user info

app.patch("/user",async (req,res)=>{
    
    const email=req.body.emailId;
    const data= req.body;
        // console.log(email);
    
    if(email===undefined) {
        res.status(400).send("user not found");
    }

    const filter={emailId:email};
    const update=data;
    // console.log(update);
    const options={new:true};

try{

    
const doc = await User.findOneAndUpdate(filter,update,options);
console.log(doc);
res.send("user updated successfully");

}

catch(err){
    res.status(400).send("something went wrong");
}

})

// user singUp api


app.post("/signUp",async (req,res)=>{
   
  
    
    // console.log(req.body);
    const user = new User(req.body);

try{


    await user.save();
    
console.log("user was saved");

}

catch(err){

    console.log("there was error");
    res.status(400).send("erorr in saving user");
    
}

res.send("user added successfully");

//   console.log("user saved successfully");

})

connectDB().then(()=>{

    console.log("database connected successfully");

    app.listen(8086,()=>{

        console.log("server is successfully running at port 8086")
    
    });

}).catch((err)=>{

    console.log("not connected to the database");

  })
  