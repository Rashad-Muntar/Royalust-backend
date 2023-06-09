import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const CONNECTION_URL:string = process.env.DB_ENDPOINT!;

const connecDB = async () => {
    try {
       await mongoose.connect(CONNECTION_URL)
    } catch (error) {
        console.log(error)
    }
    
}

export default connecDB;