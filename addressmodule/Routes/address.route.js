import express from 'express';
import { addnewAddress, getAddress } from '../controller/address.controller.js';
export const addressRouter = express.Router();


addressRouter.post('/address',addnewAddress)
.get('/add/:id',getAddress)