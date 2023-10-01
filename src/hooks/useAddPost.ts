import axios from 'axios';

import { useSelector } from 'react-redux';
import { AddPost } from '../types';
import { RefObject } from 'react';
import { useRouter } from 'next/router';

export const useAddPost = () => {
  const router = useRouter();
  const user = useSelector((state: any) => state.user.user);

  const AddPost = async (e, desc: RefObject<HTMLTextAreaElement>, file) => {
    e.preventDefault();

    if (!desc.current) {
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
