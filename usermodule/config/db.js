import mongoose from "mongoose";

export const connectdb = async()=>{
    try{
          let connect = await mongoose.connect("mongodb://localhost:27017/microservice");
          if(connect){
            console.log("connected to database")
          }
          else{
            console.log("not connected to database")
          }
    }catch(err){
        console.log(err);
    }
}