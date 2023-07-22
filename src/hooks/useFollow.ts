import axios from 'axios';
import { useDispatch } from 'react-redux';

import { toggleFollow } from '../features/userSlice';

import { User, Post } from '../types/api';

export const useFollow = () => {
  const dispatch = useDispatch();

  const followUser = async (post: Post, loginUser: User): Promise<void> => {
    const { userId } = post;
    try {
      const { data } = await axios.put(`/users/${userId}/follow`, {
        userId: loginUser._id,
      });

      dispatch(toggleFollow(data));
    } catch (err) {
      console.log(err);
    }
  };

  return {
    followUser,
  };
};
