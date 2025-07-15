import express from 'express';
import { addaddress, adduser } from '../controllers/maincontroller.js';
export const mainRouter = express.Router();
mainRouter.post('/adduser',adduser)
mainRouter.post('/address',addaddress)
