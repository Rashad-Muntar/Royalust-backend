import User  from "../models/userSchema";
import bcrypt from "bcryptjs";
import passport from "passport";


interface RegisterProps {
    username: string;
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

export default { register }