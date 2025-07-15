import express from 'express';
import { connectdb } from './config/db.js';
import { addressRouter } from './Routes/address.route.js';


const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Welcome to address module")
})

app.use('/api',addressRouter)
app.listen(port,async()=>{
    await connectdb();
    console.log(`server is listen on port ${port}`)
})