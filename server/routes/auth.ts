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

      if (!user) res.status(401).json(null);
      else {
        if (req.logIn) {
          req.logIn(user, (err) => {
            if (err) throw err;

            const { password, googleId, method, email, isAdmin, ...other } =
              user._doc;
            const token = generateToken({ id: user._id.toString() }, '7d');

            res.status(200).json({ ...other, token });
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
router.post('/register', async (req: any, res: any) => {
  try {
    const salt = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    let newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      method: ['local'],
    }) as any;

    newUser = await newUser.save();
    const emailVerificationToken = generateToken(
      { id: newUser._id.toString() },
      '30m',
    );
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendVerificationEmail(newUser.email, newUser.username, url);

    // Passport.js の req.logIn を使ってログイン処理を行う
    req.logIn(newUser, (err) => {
      if (err) {
        throw err;
      }

      const { password, googleId, method, email, isAdmin, ...other } =
        newUser._doc;
      const token = generateToken({ id: newUser._id.toString() }, '7d');

      res.status(200).json({ ...other, token });
    });
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
