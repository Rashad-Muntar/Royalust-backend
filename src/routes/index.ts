import express from 'express';
import authController from '../controllers/authController';
import dotenv from 'dotenv';


const router = express.Router();

router.get('/register', authController.register);


export default router;