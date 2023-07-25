import axios from 'axios';

import { useDispatch } from 'react-redux';
import { toggleFollow } from '../features/userSlice';

import { User, Post } from '../types';
// useUnFollow関数に引数入れたら親コンポーネントのstate入れれるんじゃないか
export const useUnFollow = () => {
  const dispatch = useDispatch();
  const unFollowUser = async (post: Post, loginUser: User): Promise<void> => {
    try {
      const response = await axios.put(
        `http://localhost:8000/users/${post.userId}/unfollow`,
        {
          userId: loginUser._id,
        },
      );
      dispatch(toggleFollow(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  return { unFollowUser };
};
