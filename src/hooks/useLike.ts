import axios from 'axios';
import { useCallback, useState } from 'react';
import { User, Post } from '../types';

export const useLike = (post: Post, loginUser: User | null) => {
  const [isGood, setIsGood] = useState<boolean>(
    loginUser ? post.likes.includes(loginUser._id) : false,
  );

  const toggleLike = useCallback(async () => {
    if (!loginUser) {
      return;
    }
    try {
      !isGood ? ++post.likes.length : --post.likes.length;
      const response = await axios.put(`/api/posts/${post._id}/like`, {
        userId: loginUser._id,
      });

      setIsGood(response.data);
    } catch (err) {
      console.log(err);
    }
  }, [isGood, post, loginUser]);

  return { toggleLike, isGood };
};
