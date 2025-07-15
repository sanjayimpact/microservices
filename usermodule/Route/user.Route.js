import express from 'express';
import { adduser, getalluser } from '../controllers/user.controllers.js';
export const userRouter = express.Router();
userRouter.post('/adduser',adduser)
userRouter.get('/alluser',getalluser);