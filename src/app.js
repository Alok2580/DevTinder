const express= require('express');

const app =express();




app.use("/pilla",[(req, res,next)=>{

    // res.send("have you requested for the pilla. so pilla is here");


console.log("outer pilla ran successfully");
next();
// res.send("hello world message from the server");

},(req,res,next)=>{
    console.log("2nd response")
    // res.send("  2 hello this is nalla under nested pilla");
    next();

},(req,res,next)=>{
    console.log("3rd response");
    // res.send("3 hello this is nalla under nested pilla");
    next();

},(req,res,next)=>{
    console.log("4th response");
    // res.send("4 hello this is nalla under nested pilla");
    next()
},(req,res,next)=>{
    console.log("5th response");
    res.send("hi this is 5th last response");
}]);

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


app.listen(1234,()=>{

    console.log("server is successfully running at port 1234")
});
