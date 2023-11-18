import axios from 'axios';

import { useDispatch } from 'react-redux';
import { toggleFollow } from '../features/userSlice';

import { User, Post } from '../types';
import { AppDispatch } from '../redux/store';
// useUnFollow関数に引数入れたら親コンポーネントのstate入れれるんじゃないか
export const useUnFollow = () => {
  const dispatch: AppDispatch = useDispatch();
  const unFollowUser = async (
    post: Post,
    loginUser: User | null,
  ): Promise<void> => {
    if (loginUser) {
      try {
        const { data: followingUser } = await axios.put(
          `/api/users/${post.userId}/unfollow`,
          {
            userId: loginUser._id,
          },
        );

        dispatch(toggleFollow(followingUser));
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('Error: loginUser is null');
    }
  };

  return { unFollowUser };
};
