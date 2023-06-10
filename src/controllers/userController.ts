import userServices from "../services/userServices";
import { Request, Response } from 'express'


const getUser = async (req: Request, res: Response) => {
    const {id} = req.params;
      if (!id) {
        return "Missing user id"
      }
      const user = await userServices.getUser({id});
      res.send({ status: "OK", data: user });
}

export default { getUser }