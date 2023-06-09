import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes/index';
import connecDB from '../config/db';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use('/api', router)

const start = async () => {
    try {
        await connecDB();
        app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();
