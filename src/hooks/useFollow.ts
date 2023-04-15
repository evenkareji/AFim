import axios from 'axios';
import { useDispatch } from 'react-redux';

import { toggleFollow } from '../features/userSlice';

import { User, UserPost } from '../types/api/user';

export const useFollow = () => {
  const dispatch = useDispatch();

  const followUser = async (post: UserPost, loginUser: User): Promise<void> => {
    try {
      const response = await axios.put(`/users/${post.userId}/follow`, {
        userId: loginUser._id,
      });

      dispatch(toggleFollow(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  return {
    followUser,
  };
};
