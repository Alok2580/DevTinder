const validator= require("validator");
const validateSignupData = (req)=>{
    
    const {firstName, lastName,emailId,password}=req.body;
    if(!validator.isEmail(emailId)){
        throw new Error("email is not valid");
    }

   else  if(!validator.isStrongPassword(password)){
        throw new Error("password is weak");
    }
    
};

const validateProfileData = (req)=>{
    const allowedProfileFields = ["firstName","lastName"];

     const isAllowed=Object.keys(req.body).every((key)=>{
        return allowedProfileFields.includes(key);
     })
    return isAllowed;
    
}

module.exports={validateSignupData,validateProfileData};

