import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
 userID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
 },
 Country:{
    type:String,
    trim:true
 },
 City:{
    type:String,
    trim:true
 },
 Street:{
    type:String,
    trim:true
 },
 Landmark:{
    type:String,
    trim:true
 }
 

}) 


export const Address = mongoose.model("Address",addressSchema)