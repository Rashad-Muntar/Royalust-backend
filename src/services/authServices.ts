import User  from "../models/userSchema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import generateTokens from "../utils/generateTokens";
import dotenv from 'dotenv';
dotenv.config();

const REFRESH_SECRET:string = process.env.REFRESH_SECRET!;

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
      const existingUser = await User.findOne({ email });
    if (existingUser) {
      return 'User already exists'
    }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({username, email, password: hashedPassword});
        user.save()
        if(user){
          await User.findByIdAndUpdate(user.id, {refreshToken: generateTokens.generateRefreshToken(user.id)})
          user.save()
        }
        return "Registered successfully";
      } catch (e:any) {
        return e.message;
       
      }  
}

const login = async ({email, password}:LoginProps)  => {
    try {
        const user = await User.findOne({email})
        if (!user) {
            return "User not found"
          }
          const passwordMatch = user.password ? bcrypt.compare(password, user.password) : false;
          if (!passwordMatch) {
            return  "Invalid username or password"
          }
          const token = generateTokens.generateAccessToken(user.id);
          await User.findByIdAndUpdate(user.id, {refreshToken: generateTokens.generateRefreshToken(user.id)})
          user.save()
          return {user, token}
      } catch (error:any) {
        return error.message;
       
      }  
}

const refresh = async({refreshToken}:any) => {
  try {
      const user =  await User.findOne({refreshToken});
      if (!user) {
        return  "Invalid refresh token";
      }
      jwt.verify(refreshToken, REFRESH_SECRET, (err:any, user:any) => {
        if (!err) {
            const accessToken = generateTokens.generateAccessToken(user.id);
            return accessToken;
        } else {
            return "Invalid refresh token"  
        }
    });
  } catch (error:any) {
      return error.message;
  }
}

export default { register, login, refresh }