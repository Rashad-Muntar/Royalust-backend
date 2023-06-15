import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET: string = process.env.JWT_SECRET!;
const REFRESH_SECRET: string = process.env.REFRESH_SECRET!;

const generateAccessToken = (userId: string) => {
  try {
    const token = jwt.sign({ id: userId }, SECRET, {
      expiresIn: "15m",
    });
    return token
  } catch (error) {
    console.log(error);
  }
};
const generateRefreshToken = (userId: string) => {
  try {
    const token = jwt.sign({ id: userId }, REFRESH_SECRET, {
      expiresIn: "7d",
    });
    return token
  } catch (error) {
    console.log(error);
  }
};

export default { generateAccessToken, generateRefreshToken };
