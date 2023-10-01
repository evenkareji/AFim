import axios from 'axios';

import { AddPost } from '../types';
import { RefObject } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from '../redux/store';

export const useAddPost = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.user);

  const AddPost = async (
    e: React.FormEvent,
    desc: RefObject<HTMLTextAreaElement>,
    file: File | null,
  ) => {
    e.preventDefault();

    if (!desc.current || !user) {
      return;
    }

    const newPost: AddPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = file.name;

      // 画像apiを叩く
      data.append('name', fileName);
      data.append('file', file);
      newPost.img = fileName;
      try {
        await axios.post('/api/upload/post-image', data);
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
