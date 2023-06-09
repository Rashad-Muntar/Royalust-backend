import { Request, Response } from 'express'
import authServices from '../services/authServices'

const register = (req: Request, res: Response) => {
    const reg = authServices.register()
    res.send({ status: "OK", data: reg });
}

export default { register }
