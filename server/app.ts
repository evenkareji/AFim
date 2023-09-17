import express from 'express';
import mongoose from 'mongoose';
import env from 'dotenv';
import authRouter from './routes/auth';
import userRouter from './routes/users';
import postRouter from './routes/post';
// import uploadRouter from './routes/upload';
// import commentRouter from './routes/comments.mjs';
import passport from 'passport';
import passportConfig from './passportConfig';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
env.config();
const app: express.Express = express();
app.use(helmet());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  }),
);

const post = process.env.PORT || 8000;

// データベース接続
mongoose
  .connect(process.env.MONGO_URL as any)
  .then(() => {
    console.log('DBと接続中');
  })
  .catch((err) => {
    console.log(err);
  });
// ミドルウェア

app.use('/', express.static('build'));
// 逆にした
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true,
    cookie: {
      path: '/', // default
      // jsでcookieをいじれなくなる
      httpOnly: true, // default
      maxAge: 24 * 60 * 60 * 1000, // 10sec
    },
  }),
);

app.use(cookieParser('secretcode'));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/posts', postRouter);
// app.use('/upload', uploadRouter);
// app.use('/comments', commentRouter);

app.get('*', function (req, res) {
  const indexHtml = path.resolve('build', 'index.html');
  res.sendFile(indexHtml);
});
app.listen(post, () => console.log(`Server is running ... localhost:${post}`));
