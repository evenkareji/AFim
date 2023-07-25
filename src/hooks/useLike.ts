import axios from 'axios';
import { useCallback, useState } from 'react';
import { User, Post } from '../types';

export const useLike = (post: Post, loginUser: User) => {
  const [isGood, setIsGood] = useState(post.likes.includes(loginUser._id));

  const toggleLike = useCallback(async () => {
    try {
      !isGood ? ++post.likes.length : --post.likes.length;
      const response = await axios.put(
        `http://localhost:8000/posts/${post._id}/like`,
        {
          userId: loginUser._id,
        },
      );

      setIsGood(response.data);
    } catch (err) {
      console.log(err);
    }
  }, [isGood, post, loginUser]);

  return { toggleLike, isGood };
};
