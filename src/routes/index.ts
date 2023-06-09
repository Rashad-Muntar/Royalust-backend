import express from 'express';
import authController from '../controllers/authController';
import userController from '../controllers/userController';
import passport from 'passport';


const router = express.Router();

router.post('/register',  authController.register);
router.post('/login', authController.login);
router.get('/getUser/:id', passport.authenticate('jwt', {session: false}), userController.getUser);


export default router;