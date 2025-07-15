import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt'

export const adduser = async(req,res)=>{
    const {username,email,password,about} = req.body;
 
    
    try{
        // check already exist or not
        let checkexisting = await User.findOne({email:email});
       
        if(checkexisting){
            return res.status(200).json({message:"Email already exist"});
        }
        else{
            //let hash the password 
            let salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt);
            //create a new user
            const createuser = new User({
                username,email,password:hash,about
            })

            await createuser.save();
            return res.status(201).json({message:"Successfully created user",isSuccess:true})
        }
    }catch(err){
            return res.status(500).json({message:err.message})
    }
}

export const getalluser = async(req,res)=>{
    try{
         let alluser = await User.find({},{password:0});
         if(alluser.length>0){
            return res.status(200).json({message:"User retrive successfully",isSuccess:true,data:alluser})
         }else{
            return res.status(200).json({message:"No user is found",isSuccess:false})
         }
    }catch(err){
        return res.status(500).json({message:err.message})
    }
}