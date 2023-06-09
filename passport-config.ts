import { Strategy, ExtractJwt } from 'passport-jwt';
import User from './src/models/userSchema';
import dotenv from 'dotenv';
dotenv.config();

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  };

const jwtStrategy = new Strategy(opts, (jwtPayload, done) => {
    User.findOne({ id: jwtPayload.id }, (err: any, user: any) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  });
  
  export default jwtStrategy;
