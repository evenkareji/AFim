import axios from 'axios';
import { useState } from 'react';
import { User, UserPost } from '../types/api/user';

export const useGetAuthor = () => {
  const [user, setUser] = useState<User>();
  const getAuthorByPostId = async (post: UserPost) => {
    const response = await axios.get(`/users/${post.userId}`);
    setUser(response.data);
  };
  return { getAuthorByPostId, user };
};
