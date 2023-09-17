import User from './models/User';
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const GOOGLE_CLIENT_ID =
  '117391584691-pjm5ancee5cc2s014v2r7gdra9iopasp.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

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
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
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
