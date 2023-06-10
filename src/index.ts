import express, { Express} from 'express';
import dotenv from 'dotenv';
import router from './routes/index';
import connecDB from '../config/db';
import passport from 'passport';
import jwtStrategy from '../passport-config';


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router)
passport.use(jwtStrategy);
app.use(passport.initialize())

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
