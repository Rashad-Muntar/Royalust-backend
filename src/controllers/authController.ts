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
    res.json({ message: "Token refreshed successfully", data: userMsg });
  };

const logout = async(req: Request, res:Response) => {
  const { refreshToken } = req.body;
    const logoutMsg = await authServices.logout({refreshToken})
  res.json({ message: logoutMsg });
};

 
export default { register, login, refresh, logout }
