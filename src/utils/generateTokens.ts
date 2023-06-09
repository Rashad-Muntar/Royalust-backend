import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
const SECRET:string = process.env.JWT_SECRET!;
const REFRESH_SECRET:string = process.env.REFRESH_SECRET!;

const generateAccessToken = (userId: string) => {
    return jwt.sign({ id: userId }, SECRET, {
        expiresIn: "15m",
    });
}
const generateRefreshToken = (userId: string) => {
    return jwt.sign({ id: userId }, REFRESH_SECRET, {
        expiresIn: "7d",
    });
}

export default { generateAccessToken, generateRefreshToken }