import User from './models/User';
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';

async function passportConfig(passport) {
  passport.use(
    new LocalStrategy(
      /**以下がないと動かない */
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email: email });
          if (!user) return done(null, false);
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err;
            if (result === true) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        } catch (err) {
          console.log(err);
          done(err);
        }
      },
    ),
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  // セッションにあるuser.idを用いてuser情報を取得
  passport.deserializeUser(async (id, cb) => {
    try {
      const user: any = await User.findOne({ _id: id });
      cb(null, user);
    } catch (err) {
      console.log(err);
      cb(err);
    }
  });
}
export default passportConfig;
