import { Request, Response } from 'express'
import authServices from '../services/authServices'

const register = (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const userMsg = authServices.register({ username, email, password })
    res.status(201)
    .json({ message: userMsg});
}

export default { register }
