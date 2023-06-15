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

const getUsers = async (req: Request, res: Response) => {
    const users = await userServices.getUsers();
    res.send({ status: "OK", data: users });
}
const updateUser = async (req: Request, res: Response) => {
  const {id, username, email} = req.body;
  const user = await userServices.updateUser({id, username, email});
  res.send({ status: "OK", data: user });
}
export default { getUser, getUsers, updateUser }