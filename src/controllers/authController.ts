import { Request, Response } from 'express'
import authServices from '../services/authServices'

const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const userMsg = await authServices.register({ username, email, password })
    res.json({ data: userMsg});
}

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userMsg = await authServices.login({email, password})
    res.json({ message: "Logged in successfully", data: userMsg });
}

const refresh = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;
    const userMsg = await authServices.refresh({refreshToken})
    console.log(userMsg)
    res.json({ message: "Token refreshed successfully", data: userMsg });
  };

 
export default { register, login, refresh }
