import axios from 'axios';

import { AddPost } from '../types';
import dataURItoBlob from '../utils/blobConverter';
import { useRouter } from 'next/router';
import { useSelector } from '../redux/store';

export const useAddPost = (image) => {
  const router = useRouter();
  const { user } = useSelector((state) => state.user);

  const AddPost = async (desc: string, file: File | null) => {
    if (!desc || !user) {
      return;
    }

    const newPost: AddPost = {
      userId: user._id,
      desc,
    };
    console.log(newPost);

    if (image) {
      console.log(image, 'inAddPpost');

      const postImage = dataURItoBlob(image); // 単一の画像をBlobに変換
      const path = `${user.username}/post Image`;
      const formData = new FormData();
      formData.append('path', path);
      formData.append('file', postImage);

      try {
        const { data } = await axios.post('/api/upload/uploadImages', formData);
        console.log(data, 'data');

        newPost.img = data.url.url;
        console.log(newPost, '成功しました');
      } catch (err) {
        console.log(err);

        alert(err);
      }
    }

    try {
      await axios.post('/api/posts', newPost);
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return { AddPost, user };
};
