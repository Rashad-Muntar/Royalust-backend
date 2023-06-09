import { Request, Response } from 'express'
import authServices from '../services/authServices'

const register = (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const userMsg = authServices.register({ username, email, password })
    res.status(201)
    .json({ message: userMsg});
}

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userMsg = await authServices.login({email, password})
    res.json({ message: "Logged in successfully", data: userMsg });
}

export default { register, login }
