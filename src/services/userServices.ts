import User  from "../models/userSchema";
import dotenv from 'dotenv';
dotenv.config();

interface GetUserProps {
    id: any;
}
const getUser = async ({id}:GetUserProps)  => {
    try {
        const user = await User.findById(id)
        if (!user) {
            return "User not found"
          }
          return {user};
      } catch (e:any) {
        console.log(e.message);
       
      }  
}

export default { getUser }