import axios from 'axios';
import { useDispatch } from 'react-redux';

import { toggleFollow } from '../features/userSlice';

import { User, UserPost } from '../types/api/user';

export const useFollow = () => {
  const dispatch = useDispatch();

  const followUser = async (post: UserPost, loginUser: User): Promise<void> => {
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
