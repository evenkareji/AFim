import User from './models/User';
import bcrypt from 'bcryptjs';
import { Strategy as LocalStrategy } from 'passport-local';

async function passportConfig(passport) {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({ username: username });
        if (!user) return done(null, false);
        bcrypt.compared(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      } catch (err) {
        console.log(err);
      }
    }),
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  // セッションにあるuser.idを用いてuser情報を取得
  passport.deserializeUser(async (id, cb) => {
    try {
      const user: any = await User.findOne({ _id: id });
      const userInfomation = { username: user.username };
      cb(null, userInfomation);
    } catch (err) {
      console.log(err);
      cb(err);
    }
  });
}
export default passportConfig;
