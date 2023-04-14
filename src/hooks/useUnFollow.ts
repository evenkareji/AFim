import axios from 'axios';

import { useDispatch } from 'react-redux';
import { toggleFollow } from '../features/userSlice';

import { User, UserPost } from '../types/api/user';
// useUnFollow関数に引数入れたら親コンポーネントのstate入れれるんじゃないか
export const useUnFollow = () => {
  const dispatch = useDispatch();
  const unFollowUser = async (
    post: UserPost,
    loginUser: User,
  ): Promise<void> => {
    try {
      const response = await axios.put(`/users/${post.userId}/unfollow`, {
        userId: loginUser._id,
      });
      dispatch(toggleFollow(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  return { unFollowUser };
};
