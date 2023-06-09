import { Strategy, ExtractJwt } from 'passport-jwt';
import User from './src/models/userSchema';
import passport from 'passport';
import dotenv from 'dotenv';
dotenv.config();

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  };

passport.use(new Strategy(opts, (jwt_payload, done) => {
    User.findOne({id: jwt_payload.id}, (err:any, user:any) => {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));
