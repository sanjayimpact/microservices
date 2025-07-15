import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        unique:true
    },
    password:{
        type:String
    },
    about:{
        type:String
    }
})

export const User = mongoose.model("User",userSchema);