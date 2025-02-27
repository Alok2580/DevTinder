
const mongoose =require("mongoose");




const connectDB= async()=>{

 await mongoose.connect(

        "mongodb+srv://aloksingh15122004:4SdAOrot0FMDJHmN@namstenodejs.pkmwr.mongodb.net/devTinder"
    )
}

module.exports= connectDB;
