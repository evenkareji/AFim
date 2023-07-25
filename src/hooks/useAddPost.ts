import axios from 'axios';

import { useSelector } from 'react-redux';
import { AddPost } from '../types';

export const useAddPost = () => {
  const user = useSelector((state: any) => state.user.user);

  const AddPost = async (e, desc, file) => {
    e.preventDefault();

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
        await axios.post('http://localhost:8000/upload/post-image', data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post('http://localhost:8000/posts', newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return { AddPost, user };
};
