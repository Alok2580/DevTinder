const adminAuth= (req,res,next)=>{
    console.log("data for the admin");
    let token="xyzadfssa";
    if(token=="xyz"){
        // res.send("here is data for the admin");
        next();
    }

    else{
        res.status(401);
        res.send("unauthorized access");
      
    }
};

const userAuth=(req,res,next)=>{
    let token="xyza";

    if(token==="xyz"){
        // res.send("user is authorized for this task");
        next();
    }

    else{
        res.status(401).send("unauthorized user access !");
    }

}
module.exports={adminAuth,userAuth};
