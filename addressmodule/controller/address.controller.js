import { Address } from "../models/address.model.js";

export const addnewAddress = async(req,res)=>{
    const {userID,Country,City,Street,Landmark} = req.body;

    try{
        // check already exists the address or not
        let existingaddress = await Address.findOne({userID:userID});
        if(existingaddress){
            return res.status(200).json({message:"User Address already exists"})
        }
        else{
            // add Address of the user
            const newAddress = new Address({
                userID,
                Country,
                City,
                Street,
                Landmark
            })

            await newAddress.save();
            return res.status(200).json({message:"Address created Successfully",isSuccess:true})
        }


    }catch(err){
        console.log(err.message);
    }
}

export const getAddress = async(req,res)=>{
    const {id}  = req.params;

   
    try{
        // get the address by using their user id
        const userAdd = await Address.findOne({userID:id});
        if(userAdd){
            return res.status(200).json({message:"Successfully fetched the User Address",data:userAdd,isSuccess:true})
        }
        else{
            return res.status(200).json({message:"Not found Any Address",isSuccess:false})
        }

        
    }catch(err){
        console.log(err);
    }
}