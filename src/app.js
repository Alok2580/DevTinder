const express= require('express');

const app =express();


app.use("/pilla",(req, res)=>{

    res.send("have you requested for the pilla. so pilla is here");

// res.send("hello world message from the server");

})

app.use("/lol",(req, res)=>{
 
    res.send("do you know pilla is LOL");

})





app.listen(1234,()=>{
    console.log("server is successfully running at port 1234")
});