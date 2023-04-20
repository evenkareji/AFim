import axios from 'axios';
import { useCallback, useState } from 'react';
import { User, UserPost } from '../types/api/user';

export const useLike = (post: UserPost, loginUser: User) => {
  const [isGood, setIsGood] = useState(post.likes.includes(loginUser._id));

  const toggleLike = useCallback(async () => {
    try {
      !isGood ? ++post.likes.length : --post.likes.length;
      const response = await axios.put(`/posts/${post._id}/like`, {
        userId: loginUser._id,
      });

      setIsGood(response.data);
    } catch (err) {
      console.log(err);
    }
  }, [isGood, post, loginUser]);

  return { toggleLike, isGood };
};
