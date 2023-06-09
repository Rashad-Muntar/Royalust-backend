import User  from "../models/userSchema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";
import dotenv from 'dotenv';
dotenv.config();


const SECRET:string = process.env.JWT_SECRET!;

interface RegisterProps {
    username: string;
    email: string;
    password: string;
}
interface LoginProps {
    email: string;
    password: string;
}
const register = async ({username, email, password}:RegisterProps)  => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({username, email, password: hashedPassword});
        user.save()
        return "Registered successfully";
      } catch (e:any) {
        console.log(e.message);
       
      }  
}

const login = async ({email, password}:LoginProps)  => {
    try {
        const user = await User.findOne({email: email})
        if (!user) {
            return "User not found"
          }
          const passwordMatch = user.password ? bcrypt.compare(password, user.password) : false;
       
          if (!passwordMatch) {
            return  "Invalid username or password"
          }
          const token = jwt.sign(
            { id: user.id },
            SECRET,
            {
              expiresIn: "1h",
            }
          );
            return {user, token}
      } catch (e:any) {
        console.log(e.message);
       
      }  
}

export default { register, login }