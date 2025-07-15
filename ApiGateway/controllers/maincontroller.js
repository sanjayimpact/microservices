import axios from "axios";

export const adduser = async(req,res)=>{

    try{
        let response = await axios.post("http://localhost:3001/api/adduser",req.body);
        const {data} = response;
        return res.status(200).json({message:data?.message})

    }catch(err){

    }
}

export const addaddress = async(req,res)=>{
    try{
         const response = await axios.post("http://localhost:3002/api/address",req.body);
         const {data} = response;
         return res.status(200).json({message:data?.message});
    }catch(err){
        console.log(err);
    }
}