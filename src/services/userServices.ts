import User from "../models/userSchema";
import dotenv from "dotenv";
dotenv.config();

interface UserProps {
  id: any;
  username: string;
  email: string;
}

type GetUserProps = Pick<UserProps, "id">;

const getUser = async ({ id }: GetUserProps) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      return "User not found";
    }
    return { user };
  } catch (e: any) {
    return e.message;
  }
};

const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error: any) {
    return error.message;
  }
};

const updateUser = async ({ id, username, email }: UserProps) => {
  try {
    const user = await User.findByIdAndUpdate(id, {
      username: username,
      email: email,
    });
    await user?.save();
    return user;
  } catch (error: any) {
    return error.message;
  }
};

export default { getUser, getUsers, updateUser };
