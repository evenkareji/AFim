import axios from 'axios';
import { useDispatch } from 'react-redux';

import { toggleFollow } from '../features/userSlice';

import { User, UserComment } from '../types/api/user';

export const useFollow = () => {
  const dispatch = useDispatch();
  // console.log('child');

  const followUser = async (
    post: UserComment,
    loginUser: User,
  ): Promise<void> => {
    console.log('child2');

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
