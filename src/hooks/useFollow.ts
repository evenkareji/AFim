import axios from 'axios';
import { useDispatch } from 'react-redux';

import { toggleFollow } from '../features/userSlice';

import { User, Post } from '../types';
import { AppDispatch } from '../redux/store';

export const useFollow = () => {
  const dispatch: AppDispatch = useDispatch();

  const followUser = async (
    post: Post,
    loginUser: User | null,
  ): Promise<void> => {
    if (loginUser) {
      try {
        const { userId } = post;
        const { data } = await axios.put(`/api/users/${userId}/follow`, {
          userId: loginUser._id,
        });

        dispatch(toggleFollow(data));
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('Error: loginUser is null');
    }
  };
  return {
    followUser,
  };
};
