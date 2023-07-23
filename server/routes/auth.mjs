import express from 'express';
const router = express.Router();
import User from '../models/User.mjs';

router.get('/', (req, res) => {
  res.json('router auth');
});

// ユーザー登録
router.post('/register', async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// ユーザー更新
router.put('/register', async (req, res) => {
  try {
    console.log('一致しました');

    const user = await User.findOneAndUpdate(
      { email: req.body.email },
      {
        $set: req.body,
      },
    );
    console.log('kousinnsaremasita');
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// ログイン
router.post('/login', async (req, res) => {
  try {
    console.log(req.body, 'Received a POST request to /auth/login');
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send('ユーザーが見つかりません');

    const vailedPassword = req.body.password === user.password;

    if (!vailedPassword) return res.status(400).json(true);

    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
