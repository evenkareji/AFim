import express from 'express';
import mongoose from 'mongoose';
import env from 'dotenv';
import next from 'next';
import authRouter from './routes/auth';
import userRouter from './routes/users';
import postRouter from './routes/post';
import uploadRouter from './routes/upload';
import passport from 'passport';
import passportConfig from './passportConfig';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import fileUpload from 'express-fileupload';
import { fileURLToPath } from 'url';

// .envファイルの設定をロード
env.config();

// Mongooseとの接続設定
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log(err));

// Next.jsのセットアップ
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// __dirname設定
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Next.jsの準備ができたらサーバーを起動
nextApp.prepare().then(() => {
  const server = express();

  server.use(helmet());
  server.use(
    cors({
      origin: process.env.FRONTEND_URL || 'http://localhost:3000', // 適宜変更する
      methods: 'GET,POST,PUT,DELETE',
      credentials: true,
    }),
  );

  // セッション管理の設定
  server.use(
    session({
      secret: process.env.SESSION_SECRET || 'secretcode',
      resave: true,
      saveUninitialized: true,
      cookie: {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      },
    }),
  );

  server.use(cookieParser(process.env.SESSION_SECRET || 'secretcode'));
  server.use(passport.initialize());
  server.use(passport.session());
  passportConfig(passport);

  server.use(fileUpload({ useTempFiles: true }));

  // JSONとURLエンコーディングのボディパーサー
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  // 静的ファイルを提供するための設定（Next.jsで必要な場合）
  server.use(express.static(path.join(__dirname, 'public')));

  // APIルート
  server.use('/users', userRouter);
  server.use('/auth', authRouter);
  server.use('/posts', postRouter);
  server.use('/upload', uploadRouter);

  // Next.jsのリクエストハンドラーを使用して全てのリクエストを処理
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // サーバーを起動
  const port = process.env.PORT || 8000;
  server.listen(port, () => console.log(`Server is running on port ${port}`));
});
