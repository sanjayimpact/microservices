import express from 'express';
import dotenv from 'dotenv';
import { userRouter } from './Route/user.Route.js';
import { connectdb } from './config/db.js';
dotenv.config();
// initialize the express
const app = express();

const Port = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',userRouter);
app.get('/',(req,res)=>{
    res.send("Welcome to server")
})
app.listen(Port,async()=>{
    await connectdb();
    console.log(`server is running on port ${Port}`);
})