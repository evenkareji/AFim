import express from 'express';
const router = express.Router();
import User from '../models/User';
import bcrypt from 'bcryptjs';
import passport from 'passport';
import { Document } from 'mongoose';
router.get('/', (req, res) => {
  res.json('router auth');
});

type SetUser = {
  username: string;
  email: string;
  password: string;
};
// ユーザー登録
router.post('/register', async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: Document & SetUser = await new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    return res.status(200).json(user);
  } catch (err) {
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
router.post('/login', (req: any, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.send('No User Exist');
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send('認証成功');
        console.log(req.user);
      });
    }
  })(req, res, next);
});

export default router;
