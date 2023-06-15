import { Request, Response } from 'express'
import authServices from '../services/authServices'
import User from '../models/userSchema';

const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const userMsg = await authServices.register({ username, email, password })
    res.json({ data: userMsg});
}

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userMsg = await authServices.login({email, password})
    res.json({ data: userMsg });
}

const refreshUserToken = async (req: Request, res: Response) => {
  const { email } = req.body;
  const userMsg = await authServices.refresh({email})
  res.json({ data: userMsg });
}

const logout = async(req: Request, res:Response) => {
  const { email } = req.body;
    const logoutMsg = await authServices.logout({email})
  res.json({ message: logoutMsg });
};

 
export default { register, login, refreshUserToken, logout }
