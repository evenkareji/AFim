import express, { Request as ExpressRequest, Response, Router } from 'express';
import multer, { StorageEngine } from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router: Router = express.Router();

// 画像の保存先のpathがうまく定められていないからデプロイ後に画像が使えない
const profileStorage: StorageEngine = multer.diskStorage({
  destination: (
    req: ExpressRequest,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void,
  ) => {
    cb(null, path.resolve(__dirname, '../public/assets/person'));
  },
  filename: (
    req: ExpressRequest,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void,
  ) => {
    cb(null, file.originalname);
  },
});

const imageStorage: StorageEngine = multer.diskStorage({
  destination: (
    req: ExpressRequest,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void,
  ) => {
    cb(null, path.resolve(__dirname, '../public/assets/images'));
  },
  filename: (
    req: ExpressRequest,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void,
  ) => {
    cb(null, file.originalname);
  },
});

const profileUpload = multer({ storage: profileStorage });
router.post(
  '/profile-image',
  profileUpload.single('profile_image'),
  (req: ExpressRequest, res: Response) => {
    try {
      console.log('profle画像成功');
      return res.status(200).json('アップロード成功しました');
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
);

const imageUpload = multer({ storage: imageStorage });
router.post(
  '/post-image',
  imageUpload.single('file'),
  (req: ExpressRequest, res: Response) => {
    try {
      console.log('画像投稿成功');
      return res.status(200).json('アップロード成功しました');
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
);

export default router;
// edit;
