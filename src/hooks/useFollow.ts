import axios from 'axios';
import { useDispatch } from 'react-redux';

import { followEvent } from '../features/userSlice';

export const useFollow = () => {
  const dispatch = useDispatch();
  const followUser = async (post, loginUser) => {
    try {
      const response = await axios.put(`/users/${post.userId}/follow`, {
        userId: loginUser._id,
      });

      dispatch(followEvent(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  return {
    followUser,
  };
};
