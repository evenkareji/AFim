import express from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';
// import { Document } from 'mongoose';
import passport from 'passport';
const router = express.Router();

// type SetUser = {
//   username: string;
//   email: string;
//   password: string;
//   method: ['local', 'google'];
// };

router.post('/login', (req: any, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) throw err;

    if (!user) res.send('No User Exist');
    else {
      req.logIn(user, (err) => {
        if (err) throw err;

        const { password, googleId, method, email, isAdmin, ...other } =
          user._doc;

        res.send(other);
      });
    }
  })(req, res, next);
});

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

router.get('/logout', (req: any, res, next) => {
  try {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).json(null);
    });
  } catch (err) {
    console.log(err);
  }
});

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
router.post('/register', async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser: any = await new User({
      username: username,
      email: email,
      password: hashedPassword,
      method: ['local'],
    });

    const user = await newUser.save();

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
