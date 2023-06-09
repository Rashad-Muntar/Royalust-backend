import User  from "../models/userSchema";

const register = ()  => {
    const user = new User({});  
    return "Hello from authServices"
}

export default { register }