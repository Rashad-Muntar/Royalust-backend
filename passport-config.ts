import { Strategy, ExtractJwt } from 'passport-jwt';
import User from './src/models/userSchema';
import dotenv from 'dotenv';
dotenv.config();

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  };

const jwtStrategy = new Strategy(opts, (jwtPayload, done) => {
  try {
    const user = User.findOne({ id: jwtPayload.id })
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
    
  });
  
  export default jwtStrategy;

