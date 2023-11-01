import express, { Request, Response, NextFunction } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';
import passport from 'passport';
import { sendVerificationEmail } from '../helpers/mailer';
import { generateToken } from '../helpers/tokens';
const router = express.Router();

interface ExtendedRequest extends Request {
  user?: number;
  logIn?: (user: any, callback: (err: any) => void) => void;
  logout?: (callback: (err: any) => void) => void;
}

router.post(
  '/login',
  (req: ExtendedRequest, res: Response, next: NextFunction) => {
    passport.authenticate('local', (err, user) => {
      if (err) throw err;

      if (!user) res.send('No User Exist');
      else {
        console.log(user);

        if (req.logIn) {
          req.logIn(user, (err) => {
            if (err) throw err;

            const { password, googleId, method, email, isAdmin, ...other } =
              user._doc;

            res.status(200).json(other);
          });
        }
      }
    })(req, res, next);
  },
);

const CLIENT_URL = 'http://localhost:3000';

router.get('/login/success', (req: any, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,
      //   cookies: req.cookies
    });
  }
});
router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});

router.get(
  '/logout',
  (req: ExtendedRequest, res: Response, next: NextFunction) => {
    try {
      if (req.logout) {
        req.logout((err) => {
          if (err) {
            return next(err);
          }
          return res.status(200).json(null);
        });
      } else {
        // ここに、logoutメソッドが存在しない場合の処理を書くことができます
        res.status(500).send('Logout function not available');
      }
    } catch (err) {
      console.log(err);
    }
  },
);

router.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }),
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed',
  }),
);
// ユーザー登録
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await new User({
      username: username,
      email: email,
      password: hashedPassword,
      method: ['local'],
    });

    const user = await newUser.save();
    const emailVerificationToken = generateToken(
      { id: user._id.toString() },
      '30m',
    );
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendVerificationEmail(user.email, user.username, url);
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
// ユーザー更新
// router.put('/register', async (req, res) => {
//   try {
//     const user = await User.findOneAndUpdate(
//       { email: req.body.email },
//       {
//         $set: req.body,
//       },
//     );

//     return res.status(200).json(user);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });
// ログイン
// router.post('/login', (req: any, res, next) => {
//   passport.authenticate('local', (err, user) => {
//     console.log(req.body);

//     if (err) throw err;
//     console.log('認証前');
//     if (!user) {
//       res.send('No User Exist');
//     } else {
//       req.logIn(user, (err) => {
//         if (err) throw err;
//         console.log('認証成功');

//         return res.send('認証成功');
//       });
//     }
//   })(req, res, next);
// });

export default router;
