import express from 'express';
import { mainRouter } from './Routes/main.routes.js';

const app = express();

const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',mainRouter)
app.listen(port,()=>{
    console.log(`main server is running on port ${port}`);
})